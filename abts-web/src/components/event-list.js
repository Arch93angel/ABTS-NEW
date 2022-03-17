import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getEvents } from '../services/event-services';


function EventList() {

    const [events, setEvents] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);



    useEffect(() => {
        setLoading(true);
        const getData = async () => {
            await getEvents()
                .then(data => {
                    setEvents(data);
                    setLoading(false);
                }).catch(e => {
                    setError(true);
                    setLoading(false);
                })
        }
        getData();

    }, [])

    if (error) return <h1>Error</h1>
    if (loading) return <h1>Loading ....</h1>

    return (
        <div className='tables'>
            <h3>Event List</h3>
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">About Event</th>
                        <th scope="col">Date/Time</th>
                        <th scope="col">Location</th>
                    </tr>
                </thead>
                {events && events.map((event => {
                    return <tbody>
                        <tr>
                            <th key="row">{event.id}</th>
                            <Link key={event.id} to={`/events/details/${event.id}`}>
                                <td>{event.title}</td>
                            </Link>
                            <td>{event.about_event}</td>
                            <td>{event.time}</td>
                            <td>{event.location}</td>
                        </tr>
                    </tbody>
                }))}
            </table>
        </div>
    )
}

export default EventList