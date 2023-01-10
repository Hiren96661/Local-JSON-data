import React from "react";
import data from "./data/data.json"

export default function Project() {
    return (
        <>
            <table border="1">
                <tr>
                    <th> Id </th>
                    <th> Name </th>
                    <th> Username</th>
                    <th> Email</th>
                    <th> Profile Picture</th>
                    <th> Address</th>
                    <th> Phone </th>
                    <th> Website</th>
                    <th> Company </th>
                </tr>
                {data.users.map((users, id) =>
                    <tr>
                        <th> {users.id}</th>
                        <th> {users.name} </th>
                        <th> {users.username} </th>
                        <th> {users.email} </th>
                        <th> <img alt={users.profilepicture} height="160" width="160" src={users.profilepicture} /> </th>
                        <td>
                            <tr>
                                <th style={{ width: "80px" }}> street : </th>
                                <td style={{ width: "150px" }}> {users.address.street}</td>
                            </tr>
                            <tr>
                                <th> suite : </th>
                                <td> {users.address.suite}</td>
                            </tr>
                            <tr>
                                <th> city : </th>
                                <td> {users.address.city}</td>
                            </tr>
                            <tr>
                                <th> zipcode : </th>
                                <td> {users.address.zipcode}</td>
                            </tr>
                            <tr>
                                <th rowSpan={2}> geo :  </th>
                                <td>  lat  : {users.address.geo.lat} </td>
                            </tr>
                            <tr>
                                <td>  lng  : {users.address.geo.lng}</td>
                            </tr>
                        </td>
                        <td> <center> {users.phone} </center> </td>
                        <td> {users.website} </td>
                        <td>
                            <tr>
                                <th> Name : </th>
                                <td> {users.company.name}</td>
                            </tr>
                            <tr>
                                <th style={{width:"110px"}}> CatchPhrase : </th>
                                <td> {users.company.catchPhrase}</td>
                            </tr>
                            <tr>
                                <th> bs : </th>
                                <td> {users.company.bs}</td>
                            </tr>
                            
                           
                        </td>
                    </tr>
                )}





            </table>

        </>
    )
}