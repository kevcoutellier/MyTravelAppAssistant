// app/Controllers/Http/TripsController.ts
import type { HttpContext } from '@adonisjs/core/http'
import Trip from '#models/trip'

export default class TripsController {
  // Method to get all trips
  async index({ response }: HttpContext) {
    const trips = await Trip.all()
    return response.json(trips)
  }

  // Method to get a trip by id
  async show({ params, response }: HttpContext) {
    const trip = await Trip.findOrFail(params.id)
    return response.json(trip)
  }

  // Method to delete a trip
  async destroy({ params, response }: HttpContext) {
    const trip = await Trip.findOrFail(params.id)
    await trip.delete()
    return response.json({ message: 'Trip deleted successfully' })
  }

  // Method to update a trip
  async update({ params, request, response }: HttpContext) {
    const tripData = request.only(['trip_name', 'start_date', 'end_date', 'destination'])
    const trip = await Trip.findOrFail(params.id)
    trip.merge(tripData)
    await trip.save()
    return response.json(trip)
  }

  // Method to create a trip
  async store({ request, response }: HttpContext) {
    const tripData = request.only([
      'trip_name',
      'destination',
      'start_date',
      'end_date',
      'group_id',
      'calendar_id',
    ])

    console.log('Received trip data:', tripData)
    console.log('destination:', tripData.destination)
    console.log('group_id:', tripData.group_id)

    if (!tripData.destination && !tripData.group_id) {
      console.log('Condition triggered: Both destination and group_id are missing')
      return response
        .status(400)
        .json({ message: 'Either destination or group_id must be provided' })
    }

    try {
      const trip = await Trip.create(tripData)
      return response.status(201).json(trip)
    } catch (error) {
      console.error('Error creating trip:', error)
      return response.status(500).json({ message: 'Error creating trip', error: error.message })
    }
  }
}
