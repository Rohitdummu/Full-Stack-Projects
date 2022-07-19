import React from 'react';
import response from '../response';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link} from "react-router-dom";
//const index = 0;

function Rank(props) {
	//const { rank, name, points, age} = response.list[index];
	const [data,setData]=useState(response.list)
    const [isActive,setisActive]=useState(false)
    //const [order,setOrder]=useState('ASC')
    useEffect(function sortTable(ip='rank',e){
            const sorted = [...response.list].sort((a,b)=>
            a[ip] - b[ip] 
            )
            setData(sorted)
			setisActive(true)
	},[])
        //className='select' className= {isActive ?'':'select'} <Link to='/LeaderBoard'></Link><Link to='/Name'></Link><Link to='/Points'></Link><Link to='/Age'></Link> \\ onClick={(e)=>sortTable('rank',e)}
        //setisActive(true)
        //console.log(e.target)
    
	return (
		<div className="text-center mt-50">
				<div>
					<Link to='/rank'><button data-testid="route-rank"  className={`${isActive ? "select": "outlined"}`}  type="button">Rank</button></Link>
					<Link to='/name'><button data-testid="route-name" className='outlined' type="button">Name</button></Link>
					<Link to='/points'><button data-testid="route-points" className='outlined'type="button">Points</button></Link>
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
			{/* <BrowserRouter>
				<Route path={'/'} element={<LeaderBoard></LeaderBoard>}></Route>
			</BrowserRouter>  */}

		</div>
	);
}

export default Rank;
