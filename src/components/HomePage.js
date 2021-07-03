import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./HomePage.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function HomePage(props) {
  const classes = useStyles();

  const history = useHistory();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(data);

  const getInfo = () => {
    setLoading(true);
    fetch(
      `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pinCode}&date=${dateNow}`
    )
      .then((response) => response.json())
      .then((results) => setData(results.sessions))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getInfo();
    setLoading(false);
  });

  //Date
  let dateObject = new Date();
  let date =
    dateObject.getDate().toString().length === 1 && `0${dateObject.getDate()}`;
  let month =
    (dateObject.getMonth() + 1).toString().length === 1 &&
    `0${dateObject.getMonth() + 1}`;
  let year = dateObject.getFullYear();
  let dateNow = `${date}-${month}-${year}`;

  //User
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const pinCode = localStorage.getItem("pinCode");

  return (
    <div className="core">
      <div className="main">
        <div className="info">
          <div>
            <div>
              <KeyboardBackspaceIcon onClick={()=>history.replace('/')} />
            </div>
            <span className="name">{`${firstName} ${lastName}`}</span>,
            {`${pinCode}`}
          </div>
        </div>
        <div className="logo">
          <img
            style={{ width: "9rem" }}
            src="/Mapsense Logo.png"
            alt="Mapsense Logo.png"
          />
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow style={{ backgroundColor: "#332272", color: "green" }}>
                <TableCell>Pincode</TableCell>
                <TableCell align="right">District Name</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Fee Type</TableCell>
                <TableCell align="right">State Name</TableCell>
                <TableCell align="right">Vaccine</TableCell>
                <TableCell align="right">Age Limit</TableCell>
                <TableCell align="right">Slots</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.pincode}
                  </TableCell>
                  <TableCell align="right">{row.district_name}</TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.fee_type}</TableCell>
                  <TableCell align="right">{row.state_name}</TableCell>
                  <TableCell align="right">{row.vaccine}</TableCell>
                  <TableCell align="right">
                    {row.allow_all_age ? "for All" : "For 18+ only"}
                  </TableCell>
                  <TableCell align="right">
                    {row.slots.map((slot) => (
                      <div>{slot}</div>
                    ))}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <div className="actions">
        <Button
          onClick={() => history.goBack()}
          style={{ marginRight: "1rem", fontSize: "20px" }}
          variant="contained"
          color="secondary"
        >
          Go Back
        </Button>

        <Button
          style={{ marginLeft: "1rem", fontSize: "20px" }}
          variant="contained"
          color="primary"
        >
          Update Data
        </Button>
      </div>
    </div>
  );
}
