import React, { useState } from "react";
import Bar from "./components/Bar";
import { Slider, notification, Typography } from "antd";
import { WarningOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import Hr from "./components/Hr";
import sleep from "./components/utils/sleepFun";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import ShuffleIcon from "@material-ui/icons/Shuffle";

import { Box } from "@mui/system";
import CodeHighlight from "./components/CodeHighlight";
import SortGenerator from "./components/SortGenerator";
import SelectionSortLogo from "../images/selection-sort-logo.png";
import { selectionSort } from "../helper/sortingAlgorithms";
import { SelectionSortCode } from "../helper/SourceCode";

const useStyles = makeStyles({
	CanvasContainer: {
		width: "100%",
		height: "81vh",
		display: "flex",
		flexDirection: "column",
	},

	numberDisplay: {
		height: "5%",
		width: "100%",
		display: "flex",
		justifyContent: "center",
		flexDirection: "row ",
		alignItems: "center",
		// border: "1px solid #f1f1f1",
	},
	Controller: {
		width: "100%",
		height: "21%",
		background: "#fff",
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
		marginTop: "4px",
	},
	sliderContainer: {
		minWidth: "750px",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
	},

	singleSliderContainer: {
		border: ".3px solid #ccc",
		background: "#fff",
		width: "40%",
		padding: "7px",
		borderRadius: "2px",
	},

	buttonStyle: {
		background: "#722ed1",
		border: "1px solid #7d53b8",

		"& hover": {
			background: "#865ebd",
		},
	},
});


const SelectionSort = () => {
	const [inputArr, setInputArr] = useState("");
	const [arr, setArr] = useState(() => {
	  if (inputArr) {
		return inputArr.split(",").map((num) => ({
		  number: parseInt(num),
		  color: "#f4124b",
		}));
	  } else {
		return [
		  { number: 69, color: "#f4124b" },
		  { number: 56, color: "#f4124b" },
		  { number: 10, color: "#f4124b" },
		  { number: 89, color: "#f4124b" },
		  { number: 8, color: "#f4124b" },
		  { number: 56, color: "#f4124b" },
		  { number: 58, color: "#f4124b" },
		  { number: 23, color: "#f4124b" },
		  { number: 77, color: "#f4124b" },
		  { number: 11, color: "#f4124b" },
		  { number: 1, color: "#f4124b" },
		];
	  }
	});
  
	const [disable, setDisable] = useState(false);
	const [time, setTime] = useState(4);
	const [alreadySorted, setAlreadySorted] = useState(false);
	const [sliderVal, setSliderVal] = useState(0);
  
	const classes = useStyles();
	const {
	  CanvasContainer,
	  Controller,
	  sliderContainer,
	  numberDisplay,
	  singleSliderContainer,
	} = classes;
  
	const handleChange = (v) => {
	  setSliderVal(v);
  
	  let arrCraeted = [];
  
	  for (let i = 0; i < v / 1.4; i++) {
		arrCraeted.push({
		  number: Math.floor(Math.random() * 100),
		  color: "#f4124b",
		});
	  }
	  setAlreadySorted(false);
	  setArr(arrCraeted);
	};
  
	const timeHandleChange = (t) => {
	  setTime(t);
	};
  
	const performSelectionSort = (arr) => {
	  return new Promise((resolve) => {
		const delay = Math.min(
		  time * 1000,
		  50000 / (arr.length * (arr.length - 1))
		);
	
		let i = 0;
		let j = 0;
		let minIndex = 0;
	
		const sortStep = () => {
		  if (i < arr.length - 1) {
			minIndex = i;
			for (j = i + 1; j < arr.length; j++) {
			  if (arr[j].number < arr[minIndex].number) {
				minIndex = j;
			  }
			}
			if (minIndex !== i) {
			  let temp = arr[i];
			  arr[i] = arr[minIndex];
			  arr[minIndex] = temp;
			}
			i++;
			j = i;
			setTimeout(() => {
			  setArr([...arr]);
			  sortStep();
			}, delay);
		  } else {
			resolve(arr);
		  }
		};
	
		sortStep();
	  });
	};
	
  
	const handleClick = async () => {
	  if (alreadySorted) {
		const sortedArr = await performSelectionSort(arr);
		setArr(sortedArr);
		setAlreadySorted(false);
	  } else {
		if (inputArr) {
		  const sortedArr = await performSelectionSort(
			inputArr.split(" ").map((num) => ({
			  number: parseInt(num),
			  color: "#f4124b",
			}))
		  );
		  setArr(sortedArr);
		} else {
		  const sortedArr = await performSelectionSort(arr);
		  setArr(sortedArr);
		}
	  }
	
	  setAlreadySorted(true);
	};
	
  
	const handleRandom = () => {
	  let arrCreated = [];
	
	  for (let i = 0; i < sliderVal / 1.4; i++) {
		arrCreated.push({
		  number: Math.floor(Math.random() * 100),
		  color: "#f4124b",
		});
	  }
	
	  setAlreadySorted(false);
	  setArr(arrCreated);
	};
	
  
	const { Title } = Typography;
  
	return (
	  <div>
	   <SortGenerator
	name={"selection"}
	image={SelectionSortLogo}
	sortFunc={selectionSort}
  />
  
  
		<h2
		  style={{
			fontWeight: "700",
			padding: "2px",
			paddingTop: "15px",
			textTransform: "uppercase",
			textAlign: "center",
			color: "#101820FF",
			background: "#fff",
			width: "20%",
			display: "flex",
			justifyContent: "center",
			flexDirection: "column ",
			alignItems: "center",
  
			marginTop: "3rem",
			marginLeft: "auto",
			marginRight: "auto ",
			borderRadius: "3px",
		  }}
		>
		  Visualizing Bubble Sort
		  <hr
			style={{ width: "200px", border: "none ", height: "1px" }}
			color="#e7e7e7"
		  />
		</h2>
		<br />
  
		<div
		  style={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			marginTop: "2rem",
		  }}
		>
		  <input
			type="text"
			placeholder="Enter a space-separated list of numbers"
			onChange={(e) => setInputArr(e.target.value)}
			style={{
			  padding: "0.5rem",
			  borderRadius: "0.25rem",
			  border: "2px solid #ccc",
			  width: "50%",
			  maxWidth: "30rem",
			  fontSize: "1.2rem",
			  textAlign: "center",
			}}
		  />
		</div>
  
		<div className={CanvasContainer}>
		  {/* //Here Position for "CANVAS" */}
  
		  <Bar heightInPercent={85} element={arr} disable={disable} />
		  <Hr />
		  <div className={numberDisplay}>
			{arr.map((e, i) => (
			  <div
				key={`num-${i}`}
				style={{
				  width: `${Math.floor(1300 / arr.length)}px`,
				  marginLeft: "2px",
				  height: "80%",
				  fontSize: "70%",
				  fontWeight: "700",
				  textAlign: "center",
				  borderRadius: "3px",
				  display: "flex",
				  background: "#fff",
				  justifyContent: "center",
				  alignItems: "center",
				  backgroundColor: "black",
				  color: "#fff",
				  border: "1.5px solid #cfcfcf",
				  boxShadow: "3px 4px 8px -1px rgba(0,0,0,0.73)",
				}}
			  >
				{e.number}
			  </div>
			))}
		  </div>
		  <Hr />
		  <div className={Controller}>
			<div className={sliderContainer}>
			  <div className={singleSliderContainer}>
				<Title level={5} type="success">
				  Value
				</Title>
				<Slider disabled={disable} step={1} onChange={handleChange} />
			  </div>
  
			  <div className={singleSliderContainer}>
				<Title level={5} type="success">
				  Time
				</Title>
				<Slider
				  disabled={disable}
				  step={1}
				  min={10}
				  max={100}
				  onChange={timeHandleChange}
				/>
			  </div>
			</div>
  
			<div
			  style={{
				width: "270px",
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-around",
				alignItems: "center",
			  }}
			>
			  <Button
				disabled={disable}
				size="medium"
				variant="contained"
				color="secondary"
				onClick={handleRandom}
				startIcon={<ShuffleIcon />}
			  >
				Random
			  </Button>
			  <Button
				size="medium"
				variant="contained"
				startIcon={<EqualizerIcon />}
				color="primary"
				disabled={disable}
				onClick={
				  alreadySorted === false
					? handleClick
					: () => {
						const key = "updatable";
						notification.open({
						  key,
						  description:
							"Array already sorted ! Please change slider ",
						  duration: 2,
						  style: {
							fontSize: "90%",
						  },
						  icon: <WarningOutlined style={{ color: "red" }} />,
						});
					  }
				}
			  >
				Sort
			  </Button>
			</div>
		  </div>
		</div>
  
		<Box
		  display="flex"
		  justifyContent="center"
		  alignItems="center"
		  height="100%"
		  sx={{ mt: "3rem" }}
		>
		  <CodeHighlight {...SelectionSortCode} />
		</Box>
	  </div>
	);
  };
  
  export default SelectionSort;
  