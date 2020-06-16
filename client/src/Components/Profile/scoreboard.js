import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import "./Profile.css";
import {
  Card,
  CardTitle,
  CardMenu,
  CardText,
  CardActions,
  IconButton,
  Button,
} from "react-mdl";
//home page
//class="rank"

const Scoreboard = () => {
  return (
    <div>
      <aside class="scoreContainer">
        <Card shadow={0} style={{ width: "280px", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "120px",
              background:
                "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover",
            }}
          >
            Highscores
          </CardTitle>
          <CardText>
            <main>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th class="rank">#Rank</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>trafficmurmur </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>foldingoriginal</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>agreeablypleasant</td>
                  </tr>
                </tbody>
              </Table>
            </main>
          </CardText>
          <CardActions border>
            <Button colored>Refresh</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </aside>
    </div>
  );
};
export default Scoreboard;
