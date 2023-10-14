import React from "react";
import Card from "./components/Card";
import { makeStyles } from "@material-ui/core/styles";
import BubbleSortImg from "./../images/Algo Pics/BubbleSort.png";
import QuickSortImg from "./../images/Algo Pics/QuickSort.png";
import DijkstraImg from "./../images/Algo Pics/Dijkstra.png";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";

const Style = makeStyles({
  MainDiv: {
    // border: "1px solid red",
    background: "#101418",
    height: "100%",
    width: "100%",
    // marginTop: "5px",
    // zIndex: "-5",
  },

  cards: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
});

function Home() {
  const classes = Style();
  const { MainDiv, cards } = classes;
  const numOfCard = [
    [
      {
        title: "Bubble Sort",
        imgSrc: BubbleSortImg,
        url: "/bubblesort",
        desc: "Bubble Sort is the simplest sorting algorithm .This sorting algorithm is slow.It compares between two elements,larger element among those comparable element swap with small element and placed in right.It used loop that's why it's time complexity is high.🙂",
      },
      {
        title: "Quick Sort",
        imgSrc: QuickSortImg,
        url: "/quicksort",
        desc: "Quick Sort is also sorting algorithm .It's name Quick sort that does n't mean it is Fastest Algorithm 😃. It is faster than Bubble sort. It is divide and conquer algorithm so , It's use Recursion .So time complexity is less compair to Bubble Sort .  ",
      },
      {
        title: " Merge Sort",
        imgSrc: QuickSortImg,
        url: "/MergeSort",
        desc: "SinglyLinked List is a Data Structure. Where every node pointing a Tail and adding or removing an element in a Linked List from the front,the end or from anywhere in the list But in This project we can remove or add from last in list.It's like VECTOR in Mathematices because it's one directional ",
      },
    ],

    [
      {
        title: "Dijkstra",
        imgSrc: DijkstraImg,
        url: "/dijkstra",
        desc: "Dijkstra is a path finding algorithm.It is used in .It can find shortest path between two nodes in a Graph.It can perform only in weighted graph.To find two nodes we can use adjacency list or matrix.  ",
      },
      {
        title: "Selection",
        imgSrc: BubbleSortImg,
        url: "/selectionSort",
        desc: "Selection Sort is a simple sorting algorithm that sorts an array by repeatedly finding the minimum element from unsorted part and placing it at the beginning. It works by selecting the smallest (or largest, depending on the order) element from the unsorted portion of the array and swapping it with the first element of the unsorted portion. This process is repeated until the entire array is sorted in ascending (or descending) order. Although easy to implement, it has an average and worst-case time complexity of O(n^2), making it inefficient for large data sets.",
      },
      {
        title: "Insertion",
        imgSrc: BubbleSortImg,
        url: "/insertionSort",
        desc: "Insertion Sort is a simple sorting algorithm that works well for small lists. It involves iterating through an array and sorting each element in its proper place by comparing it with the elements before it. Insertion sort has an average time complexity of O(n^2), but performs efficiently on almost sorted lists.",
      },
    ],
  ];

  // const obj = {
  // 	0: {
  // 		title: "Bubble Sort",
  // 		imgSrc: BubbleSortImg,
  // 	},
  // 	1: {
  // 		title: "Quick Sort",
  // 		imgSrc: QuickSortImg,
  // 	},
  // 	2: {
  // 		title: " Singly Linked Lisr",
  // 		imgSrc: LinkedListImg,
  // 	},
  // 	3: {
  // 		title: "Dfs",
  // 		imgSrc: DfsImg,
  // 	},
  // 	4: {
  // 		title: "Dijkstra",
  // 		imgSrc: DijkstraImg,
  // 	},
  // };

  return (
    <div className={MainDiv}>
      {/* <Card
				img="https://picsum.photos/id/54/400/300"
				title="What I learned from my visit to The Upside Down"
				author="Nancy Wheeler"
			/> */}

      {numOfCard.map((e, i) => (
        <div key={`cards-${i}`} className={cards}>
          {e.map((e1, j) => (
            <Link key={`link-${i}-${j}`} to={e1.url}>
              <Card
                key={`card-${i}-${j}`}
                img={e1.imgSrc}
                title={e1.title}
                author="abc"
                description={e1.desc}
              />
            </Link>
          ))}
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default Home;
