import React from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import {
  Home as HomeIcon,
  Sort as SortIcon,
  BubbleChart as BubbleChartIcon,
  MergeType as MergeTypeIcon,
  FilterHdr as FilterHdrIcon,
  Functions as FunctionsIcon,
  InsertChart as InsertChartIcon,
  Lock as LockIcon,
  Person as PersonIcon,
  Clear as ClearIcon,
} from "@material-ui/icons";
// import { RiLoginBoxLine, RiRegisterLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));

const SlideBar = (props) => {
  const classes = useStyles();
  const { open, onClose } = props;

  const handleDrawerClose = () => {
    onClose();
  };

  return (
    <div className={classes.root} style={{ display: "absolute" }}>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            <ClearIcon style={{ color: "#007fff" }} />
          </IconButton>
        </div>
        <List>
          {/* List items */}
          <List>
            <ListItem button key="Home" component={Link} to="/">
              <ListItemIcon>
                <HomeIcon style={{ color: "#007fff" }} />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button key="Sorting Algorithms">
              <ListItemIcon>
                <SortIcon style={{ color: "#007fff" }} />
              </ListItemIcon>
              <ListItemText primary="Sorting Algorithms" />
            </ListItem>
            <List>
              {/* <ListItem button key="Bubble Sort">
              <ListItemIcon>
                <BubbleChartIcon />
              </ListItemIcon>
              <ListItemText primary="Bubble Sort" />
            </ListItem> */}
              <ListItem
                button
                key="Bubble Sort"
                component={Link}
                to="./BubbleSort"
              >
                <ListItemIcon>
                  <BubbleChartIcon style={{ color: "#007fff" }} />
                </ListItemIcon>
                <ListItemText primary="Bubble Sort" />
              </ListItem>
              <ListItem
                button
                key="Selection Sort"
                component={Link}
                to="./SelectionSort"
              >
                <ListItemIcon>
                  <BubbleChartIcon style={{ color: "#007fff" }} />
                </ListItemIcon>
                <ListItemText primary="Selection Sort" />
              </ListItem>

              <ListItem
                button
                key="Merge Sort"
                component={Link}
                to="./MergeSort"
              >
                <ListItemIcon>
                  <MergeTypeIcon style={{ color: "#007fff" }} />
                </ListItemIcon>
                <ListItemText primary="Merge Sort" />
              </ListItem>
              <ListItem button key="Heap Sort" component={Link} to="./HeapSort">
                <ListItemIcon>
                  <FilterHdrIcon style={{ color: "#007fff" }} />
                </ListItemIcon>
                <ListItemText primary="Heap Sort" />
              </ListItem>
              <ListItem
                button
                key="Quick Sort"
                component={Link}
                to="./QuickSort"
              >
                <ListItemIcon>
                  <FunctionsIcon style={{ color: "#007fff" }} />
                </ListItemIcon>
                <ListItemText primary="Quick Sort" />
              </ListItem>
              <ListItem
                button
                key="Insertion Sort"
                component={Link}
                to="./InsertionSort"
              >
                <ListItemIcon>
                  <InsertChartIcon style={{ color: "#007fff" }} />
                </ListItemIcon>
                <ListItemText primary="Insertion Sort" />
              </ListItem>
              <ListItem
                button
                key="Dijkstra's Algorithm"
                component={Link}
                to="./Dijkstra"
              >
                <ListItemIcon>
                  <FilterHdrIcon style={{ color: "#007fff" }} />
                </ListItemIcon>
                <ListItemText primary="Dijkstra's Algorithm" />
              </ListItem>
            </List>
            <ListItem button key="Login">
              <ListItemIcon>
                <LockIcon style={{ color: "#007fff" }} />
              </ListItemIcon>
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem button key="Register">
              <ListItemIcon>
                <PersonIcon style={{ color: "#007fff" }} />
              </ListItemIcon>
              <ListItemText primary="Register" />
            </ListItem>
          </List>
        </List>
      </Drawer>
    </div>
  );
};

export default SlideBar;
