import React, { useEffect } from 'react';
import Restaurantfinder from '../APIs/Restaurantfinder';

const RestaurantList = () => {
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await Restaurantfinder.get("/");
        console.log("REPONSE LOADED NOW",response);
      } catch (err) {
        console.log(err)
       }
    }
    fetchData();
  }, []);

  return (
    <div className="list-group">
      <table className="table table-hover">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody className="table-dark">
          <tr>
            <td>church's chicken</td>
            <td>homewood</td>
            <td>$$$</td>
            <td>Rating 1-5</td>
            <td>
              <button className="btn btn-warning">Update</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <td>church's chicken</td>
            <td>homewood</td>
            <td>$$$</td>
            <td>Rating 1-5</td>
            <td>
              <button className="btn btn-warning">Update</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
  )
}

export default RestaurantList
