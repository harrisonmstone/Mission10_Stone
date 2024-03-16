import { useEffect, useState } from 'react';
import { Bowler } from '../types/Bowler';

function Bowlers() {
  const [bowlerData, setbowlerData] = useState<Bowler[]>([]);

  useEffect(() => {
    const fetchbowlerData = async () => {
      const rsp = await fetch(
        'http://localhost:5251/api/Bowlers/marlins-sharks',
      );
      const f = await rsp.json();
      setbowlerData(f);
    };
    fetchbowlerData();
  }, []);

  return (
    <>
      <div className="row">
        <h4>Best Bowlers</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Bowler First Name</th>
            <th>Bowler Middle Initial</th>
            <th>Bowler Last Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
            <th>Team Name</th>
          </tr>
        </thead>
        <tbody>
          {bowlerData.map((f) => (
            <tr key={f.bowlerId}>
              <td>{f.bowlerFirstName}</td>
              <td>{f.bowlerMiddleInit}</td>
              <td>{f.bowlerLastName}</td>
              <td>{f.bowlerAddress}</td>
              <td>{f.bowlerCity}</td>
              <td>{f.bowlerState}</td>
              <td>{f.bowlerZip}</td>
              <td>{f.bowlerPhoneNumber}</td>
              <td>{f.team?.teamName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Bowlers;
