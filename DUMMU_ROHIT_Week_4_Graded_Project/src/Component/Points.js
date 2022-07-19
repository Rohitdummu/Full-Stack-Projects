import React from 'react';
import response from '../response';
import { useEffect } from 'react';
import { useState } from 'react';
import {Link} from "react-router-dom";
//const index = 0;

function Points(props) {
	//const { rank, name, points, age} = response.list[index];
    const [data,setData]=useState(response.list)
    const [isActive,setisActive]=useState(false)
    //const [order,setOrder]=useState('ASC')
    useEffect(function sortPoints(ip='points',e){
            const sorted = [...response.list].sort((a,b)=>
            a[ip] - b[ip] 
            )
            setData(sorted)
            setisActive(true)
    },[])
        //className='select' className= {isActive ?'':'select'} 
        // setisActive(true)
        // console.log(e.target)
        // sort based on string to sort numbers use a-b i.e in strings 25 > 100 bcoz it compares 2 > 1 like that
    
	return (
		<div className="text-center mt-50">
                <div>
                    <Link to='/rank'><button data-testid="route-rank" className='outlined' type="button">Rank</button></Link>
					<Link to='/name'><button data-testid="route-name" className='outlined' type="button">Name</button></Link>
					<Link to='/points'><button data-testid="route-points" className={`${isActive ? "select": "outlined"}`} type="button">Points</button></Link>
					<Link to='/age'><button data-testid="route-age" className='outlined' type="button">Age</button></Link>	
				</div>
			<div className="card mx-auto pb-20 mb-30" style={{ width: '50%' }}>
				<table className="mt-50" data-testid="app-table">
					<thead>
						<tr>
							<th>Rank</th>
							<th>Name</th>
							<th className="numeric">Points</th>
							<th className="numeric">Age</th>
						</tr>
					</thead>
					<tbody data-testid="app-tbody">
						{
							data.map((item,index)=>(
								<React.Fragment key={item.rank}>
									<tr>
										<td data-testid={`rank-${index}`}>{item.rank}</td>
										<td data-testid={`name-${index}`}>{item.name}</td>
										<td data-testid={`points-${index}`} className="numeric">{item.points}</td>
										<td data-testid={`age-${index}`} className="numeric">{item.age}</td>
									</tr>
								</React.Fragment>
							))
						}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Points;
