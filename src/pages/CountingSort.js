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

const CountingSort = () => {
	const [arr, setArr] = useState([
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
	]);

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

	const handleClick = async () => {
        if (arr.length !== 0) {
          // Find the maximum value in the array
          let maxVal = arr[0].number;
          for (let i = 1; i < arr.length; i++) {
            if (arr[i].number > maxVal) {
              maxVal = arr[i].number;
            }
          }
      
          // Create an array to count the occurrences of each value
          const counts = new Array(maxVal + 1).fill(0);
          for (let i = 0; i < arr.length; i++) {
            counts[arr[i].number]++;
          }
      
          // Calculate the cumulative counts
          for (let i = 1; i < counts.length; i++) {
            counts[i] += counts[i - 1];
          }
      
          // Create a new array to hold the sorted elements
          const sortedArr = new Array(arr.length);
          for (let i = arr.length - 1; i >= 0; i--) {
            await sleep(time);
            const index = counts[arr[i].number] - 1;
            sortedArr[index] = arr[i];
            counts[arr[i].number]--;
            setArr([...sortedArr]);
          }
      
          // Set the colors of the sorted array
          for (let i = 0; i < arr.length; i++) {
            sortedArr[i].color = "#23ff00";
          }
          setArr([...sortedArr]);
      
          setAlreadySorted(true);
          setDisable(false);
        }
      };
      

	const handleRandom = () => {
		if (sliderVal !== 0 || arr.length === 11) {
			let arrCraeted = [];
			let round = sliderVal === 0 ? arr.length : sliderVal / 1.4;
			for (let i = 0; i < round; i++) {
				arrCraeted.push({
					number: Math.floor(Math.random() * 100),
					color: "#f4124b",
				});
			}

			setAlreadySorted(false);
			setArr(arrCraeted);
		}
	};

	const { Title } = Typography;

	return (
		<div>
			<h2
				style={{
					fontWeight: "700",
					padding: "2px",
					textTransform: "uppercase",
					textAlign: "center",
					color: "#101820FF",
					background: "#fff",
					width: "20%",
					display: "flex",
					justifyContent: "center",
					flexDirection: "column ",
					alignItems: "center",

					marginTop: "5px",
					marginLeft: "auto",
					marginRight: "auto ",
					borderRadius: "3px",
				}}
			>
				Counting Sort
				<hr
					style={{ width: "200px", border: "none ", height: "1px" }}
					color="#e7e7e7"
				/>
			</h2>

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
		</div>
	);
};

export default CountingSort;
