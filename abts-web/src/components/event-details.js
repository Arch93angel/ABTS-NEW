import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchEvent } from '../hooks/fetch-event';
import { DateTime } from 'luxon';


function EventDetail() {

    const { id } = useParams();
    const [data, loading, error] = useFetchEvent(id);
    const [event, setEvent] = useState(null);

    useEffect(() => {
        setEvent(data)
    }, [data])

    if (error) return <h1>Error</h1>
    if (loading) return <h1>Loading ....</h1>


    return (
        <div>
            {event && event.map(event => {

                const format = "yyyy-MM-dd'T'HH:mm:ss'Z'";
                const evtTime = DateTime.fromFormat(event.time, format)

                return <div key={event.id}>
                    <h2>{event.title}</h2>
                    <h3>{event.location}</h3>
                    <h4>{event.time}</h4>
                    <p>{evtTime.toSQLDate()} == {evtTime.toFormat('HH:mm')}</p>
                    <h4>{event.about_event}</h4>
                </div>
            })}


        </div>
    )
}

export default EventDetail