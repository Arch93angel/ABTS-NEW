import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchGroup } from '../hooks/fetch-group';
import { DateTime } from 'luxon';
import Header from './header';


function GroupDetail() {

    const { id } = useParams();
    const [data, loading, error] = useFetchGroup(id);
    const [group, setGroup] = useState(null);


    useEffect(() => {
        setGroup(data)
    }, [data])

    if (error) return <h1>Error</h1>
    if (loading) return <h1>Loading ....</h1>


    return (
        <div>

            {group &&
                <React.Fragment>
                    <div className='header'>
                        <Header />
                    </div>
                    <h1>{group.name} {group.location}</h1>
                    <h2>{group.description}</h2>

                    <h3>Events:</h3>
                    {group.events.map(event => {

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
                </React.Fragment>
            }
        </div>
    )
}

export default GroupDetail