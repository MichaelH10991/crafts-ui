import React from "react";
import mockData from "./mock-data";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import Dialog from "./Dialog";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 950,
    // height: 300,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

export default function Main() {
  const data = mockData();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList} cols={4}>
        <GridListTile key="Subheader" cols={4} style={{ height: "auto" }}>
          <ListSubheader component="div">October</ListSubheader>
        </GridListTile>
        {data.map((tile, index) => (
          <GridListTile key={index}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={<Dialog data={tile} />}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
