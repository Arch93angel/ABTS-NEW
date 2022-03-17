import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getGroups } from '../services/group-services';
import Header from './header';


function GroupList() {

    const [groups, setGroups] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);



    useEffect(() => {
        setLoading(true);
        const getData = async () => {
            await getGroups()
                .then(data => {
                    setGroups(data);
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
        <React.Fragment>

            <div className='header'>
                <Header />
            </div>
            <div className='tables'>

                <table class="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Location</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    {groups && groups.map((group => {
                        return <tbody>
                            <tr>
                                <th key="row">{group.id}</th>
                                <Link key={group.id} to={`/group/details/${group.id}`}>
                                    <td>{group.name}</td>
                                </Link>
                                <td>{group.location}</td>
                                <td>{group.description}</td>
                            </tr>
                        </tbody>
                    }))}
                </table>
            </div>
        </React.Fragment>

    )
}

export default GroupList