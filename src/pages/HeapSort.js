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
import { Box } from "@mui/material";
import CodeHighlight from "./components/CodeHighlight";
import { HeapSortCode } from '../helper/SourceCode'


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

const HeapSort = () => {
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
			// Build Max Heap
			for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
				await heapify(arr, arr.length, i, time);
			}

			// Heap sort
			for (let i = arr.length - 1; i > 0; i--) {
				await sleep(time);
				let temp = arr[0];
				arr[0] = arr[i];
				arr[i] = temp;

				setDisable(true);
				setArr([...arr]);

				await heapify(arr, i, 0, time);

				arr[i].color = "#23ff00";
				setArr([...arr]);
			}

			arr[0].color = "#23ff00";
			setArr([...arr]);
			setAlreadySorted(true);
			setDisable(false);
		}
	};

	async function heapify(arr, n, i, time) {
		let largest = i;
		let left = 2 * i + 1;
		let right = 2 * i + 2;

		if (left < n && arr[left].number > arr[largest].number) {
			largest = left;
		}

		if (right < n && arr[right].number > arr[largest].number) {
			largest = right;
		}

		if (largest !== i) {
			await sleep(time);

			arr[i].color = "#ebd808";
			arr[largest].color = "#ebd808";

			let temp = arr[i];
			arr[i] = arr[largest];
			arr[largest] = temp;

			setArr([...arr]);

			await heapify(arr, n, largest, time);

			arr[i].color = "#f4124b";
			arr[largest].color = "#f4124b";
		}
	}


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
			{/* <Box sx={{ width: "100vw", height: '18vh', display: "flex", alignItems: "center", justifyContent: "center", marginY: "1rem", marginTop: '4.5rem' }}>
				<img src={HeapSortLogo} style={{ maxWidth: 'auto', height: '100%' }} />
			</Box>
			 */}
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
				Visualizing Heap Sort
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
			<Box display='flex' justifyContent='center' alignItems='center' height='100%'>
				<CodeHighlight {...HeapSortCode} />
			</Box>
		</div>
	);
};

export default HeapSort;
