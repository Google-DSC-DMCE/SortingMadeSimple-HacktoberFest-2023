export const SelectionSortCode = {
    'C++': ['cpp', `// C++ program for implementation of
// selection sort
#include <bits/stdc++.h>
using namespace std;

//Swap function
void swap(int *xp, int *yp)
{
    int temp = *xp;
    *xp = *yp;
    *yp = temp;
}

void selectionSort(int arr[], int n)
{
    int i, j, min_idx;
    // One by one move boundary of
    // unsorted subarray
    for (i = 0; i < n-1; i++)
    {
        // Find the minimum element in
        // unsorted array
        min_idx = i;
        for (j = i+1; j < n; j++)
        {
        if (arr[j] < arr[min_idx])
            min_idx = j;
        }
        // Swap the found minimum element
        // with the first element
        if (min_idx!=i)
            swap(&arr[min_idx], &arr[i]);
    }
}

//Function to print an array
void printArray(int arr[], int size)
{
    int i;
    for (i=0; i < size; i++)
    {
    cout << arr[i] << " ";
    cout << endl;
    }
}

// Driver program to test above functions
int main()
{
    int arr[] = {64, 25, 12, 22, 11};
    int n = sizeof(arr)/sizeof(arr[0]);
    selectionSort(arr, n);
    cout << "Sorted array: \n";
    printArray(arr, n);
    return 0;
}
// This is code is contributed by rathbhupendra`],
    Python: ['python',`# Python program for implementation of Selection
# Sort
import sys
A = [64, 25, 12, 22, 11]

# Traverse through all array elements
for i in range(len(A)):
    
    # Find the minimum element in remaining
    # unsorted array
    min_idx = i
    for j in range(i+1, len(A)):
        if A[min_idx] > A[j]:
            min_idx = j
            
    # Swap the found minimum element with
    # the first element	
    A[i], A[min_idx] = A[min_idx], A[i]

# Driver code to test above
print ("Sorted array")
for i in range(len(A)):
    print("%d" %A[i],end=" , ")
    
`],
Java: ['java',`// Java program for implementation of Selection Sort
import java.io.*;
public class SelectionSort
{
void sort(int arr[])
{
    int n = arr.length;

    // One by one move boundary of unsorted subarray
    for (int i = 0; i < n-1; i++)
    {
        // Find the minimum element in unsorted array
        int min_idx = i;
        for (int j = i+1; j < n; j++)
            if (arr[j] < arr[min_idx])
                min_idx = j;

        // Swap the found minimum element with the first
        // element
        int temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
}

// Prints the array
void printArray(int arr[])
{
    int n = arr.length;
    for (int i=0; i<n; ++i)
        System.out.print(arr[i]+" ");
    System.out.println();
}

// Driver code to test above
public static void main(String args[])
{
    SelectionSort ob = new SelectionSort();
    int arr[] = {64,25,12,22,11};
    ob.sort(arr);
    System.out.println("Sorted array");
    ob.printArray(arr);
}
}
/* This code is contributed by Rajat Mishra*/
`],
'C#':['csharp',`// C# program for implementation of Insertion Sort
using System;

class InsertionSort {

	// Function to sort array
	// using insertion sort
	void sort(int[] arr)
	{
		int n = arr.Length;
		for (int i = 1; i < n; ++i) {
			int key = arr[i];
			int j = i - 1;

			// Move elements of arr[0..i-1],
			// that are greater than key,
			// to one position ahead of
			// their current position
			while (j >= 0 && arr[j] > key) {
				arr[j + 1] = arr[j];
				j = j - 1;
			}
			arr[j + 1] = key;
		}
	}

	// A utility function to print
	// array of size n
	static void printArray(int[] arr)
	{
		int n = arr.Length;
		for (int i = 0; i < n; ++i)
			Console.Write(arr[i] + " ");

		Console.Write("\n");
	}

	// Driver Code
	public static void Main()
	{
		int[] arr = { 12, 11, 13, 5, 6 };
		InsertionSort ob = new InsertionSort();
		ob.sort(arr);
		printArray(arr);
	}
}

// This code is contributed by ChitraNayal.


`],
PHP: ['php',`<?php
// PHP program for insertion sort

// Function to sort an array
// using insertion sort
function insertionSort(&$arr, $n)
{
	for ($i = 1; $i < $n; $i++)
	{
		$key = $arr[$i];
		$j = $i-1;
	
		// Move elements of arr[0..i-1],
		// that are greater than key, to
		// one position ahead of their
		// current position
		while ($j >= 0 && $arr[$j] > $key)
		{
			$arr[$j + 1] = $arr[$j];
			$j = $j - 1;
		}
		
		$arr[$j + 1] = $key;
	}
}

// A utility function to
// print an array of size n
function printArray(&$arr, $n)
{
	for ($i = 0; $i < $n; $i++)
		echo $arr[$i]." ";
	echo "\n";
}

// Driver Code
$arr = array(12, 11, 13, 5, 6);
$n = sizeof($arr);
insertionSort($arr, $n);
printArray($arr, $n);

// This code is contributed by ChitraNayal.
?>

`],
Javascript:['javascript',`<script>
// Javascript program for insertion sort

// Function to sort an array using insertion sort
function insertionSort(arr, n)
{
	let i, key, j;
	for (i = 1; i < n; i++)
	{
		key = arr[i];
		j = i - 1;

		/* Move elements of arr[0..i-1], that are
		greater than key, to one position ahead
		of their current position */
		while (j >= 0 && arr[j] > key)
		{
			arr[j + 1] = arr[j];
			j = j - 1;
		}
		arr[j + 1] = key;
	}
}

// A utility function to print an array of size n
function printArray(arr, n)
{
	let i;
	for (i = 0; i < n; i++)
		document.write(arr[i] + " ");
	document.write("<br>");
}

// Driver code
	let arr = [12, 11, 13, 5, 6 ];
	let n = arr.length;

	insertionSort(arr, n);
	printArray(arr, n);
	
// This code is contributed by Mayank Tyagi

</script>

`]
}

export const BubbleSortCode = {
    'C++': ['cpp', `// C++ program for implementation
// of Bubble sort
#include <bits/stdc++.h>
using namespace std;

// A function to implement bubble sort
void bubbleSort(int arr[], int n)
{
	int i, j;
	for (i = 0; i < n - 1; i++)

		// Last i elements are already
		// in place
		for (j = 0; j < n - i - 1; j++)
			if (arr[j] > arr[j + 1])
				swap(arr[j], arr[j + 1]);
}

// Function to print an array
void printArray(int arr[], int size)
{
	int i;
	for (i = 0; i < size; i++)
		cout << arr[i] << " ";
	cout << endl;
}

// Driver code
int main()
{
	int arr[] = { 5, 1, 4, 2, 8};
	int N = sizeof(arr) / sizeof(arr[0]);
	bubbleSort(arr, N);
	cout << "Sorted array: \n";
	printArray(arr, N);
	return 0;
}
// This code is contributed by rathbhupendra

// bubble sort
`],
    Python: ['python',`# Python program for implementation of Bubble Sort

def bubbleSort(arr):
	n = len(arr)

	# Traverse through all array elements
	for i in range(n):

		# Last i elements are already in place
		for j in range(0, n-i-1):

			# traverse the array from 0 to n-i-1
			# Swap if the element found is greater
			# than the next element
			if arr[j] > arr[j+1]:
				arr[j], arr[j+1] = arr[j+1], arr[j]


# Driver code to test above
if __name__ == "__main__":
arr = [5, 1, 4, 2, 8]

bubbleSort(arr)

print("Sorted array is:")
for i in range(len(arr)):
	print("%d" % arr[i], end=" ")


`],
Java: ['java',`// Java program for implementation of Bubble Sort
import java.util.*;

class BubbleSort {
	void bubbleSort(int arr[])
	{
		int n = arr.length;
		for (int i = 0; i < n - 1; i++)
			for (int j = 0; j < n - i - 1; j++)
				if (arr[j] > arr[j + 1]) {
					// swap arr[j+1] and arr[j]
					int temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
				}
	}

	/* Prints the array */
	void printArray(int arr[])
	{
		int n = arr.length;
		for (int i = 0; i < n; ++i)
			System.out.print(arr[i] + " ");
		System.out.println();
	}

	// Driver method to test above
	public static void main(String args[])
	{
		BubbleSort ob = new BubbleSort();
		int arr[] = { 5, 1, 4, 2, 8 };
		ob.bubbleSort(arr);
		System.out.println("Sorted array");
		ob.printArray(arr);
	}
}
/* This code is contributed by Rajat Mishra */

`],
'C#':['csharp',`// C# program for implementation
// of Bubble Sort
using System;

class GFG {
	static void bubbleSort(int[] arr)
	{
		int n = arr.Length;
		for (int i = 0; i < n - 1; i++)
			for (int j = 0; j < n - i - 1; j++)
				if (arr[j] > arr[j + 1]) {
					// swap temp and arr[i]
					int temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
				}
	}

	/* Prints the array */
	static void printArray(int[] arr)
	{
		int n = arr.Length;
		for (int i = 0; i < n; ++i)
			Console.Write(arr[i] + " ");
		Console.WriteLine();
	}

	// Driver method
	public static void Main()
	{
		int[] arr = { 5, 1, 4, 2, 8};
		bubbleSort(arr);
		Console.WriteLine("Sorted array");
		printArray(arr);
	}
}

// This code is contributed by Sam007

`],
PHP: ['php',`<?php
// PHP program for implementation
// of Bubble Sort

function bubbleSort(&$arr)
{
	$n = sizeof($arr);

	// Traverse through all array elements
	for($i = 0; $i < $n; $i++)
	{
		// Last i elements are already in place
		for ($j = 0; $j < $n - $i - 1; $j++)
		{
			// traverse the array from 0 to n-i-1
			// Swap if the element found is greater
			// than the next element
			if ($arr[$j] > $arr[$j+1])
			{
				$t = $arr[$j];
				$arr[$j] = $arr[$j+1];
				$arr[$j+1] = $t;
			}
		}
	}
}

// Driver code to test above
$arr = array(5, 1, 4, 2, 8);

$len = sizeof($arr);
bubbleSort($arr);

echo "Sorted array : \n";

for ($i = 0; $i < $len; $i++)
	echo $arr[$i]." ";

// This code is contributed by ChitraNayal.
?>

`],
Javascript:['javascript',`<script>

function swap(arr, xp, yp)
{
	var temp = arr[xp];
	arr[xp] = arr[yp];
	arr[yp] = temp;
}

// An optimized version of Bubble Sort
function bubbleSort( arr, n)
{
var i, j;
for (i = 0; i < n-1; i++)
{
	for (j = 0; j < n-i-1; j++)
	{
		if (arr[j] > arr[j+1])
		{
		swap(arr,j,j+1);
		
		}
	}

}
}

/* Function to print an array */
function printArray(arr, size)
{
	var i;
	for (i=0; i < size; i++)
		document.write(arr[i]+ " ");
	document.write("\n");
}

// Driver program to test above functions
var arr = [5, 1, 4, 2, 8];
	var n = 5;
	document.write("UnSorted array: \n");
	printArray(arr, n);

	bubbleSort(arr, n);
	document.write("Sorted array: \n");
	printArray(arr, n);


</script>

`]
}

export const HeapSortCode = {
    'C++': ['cpp', `// C++ program for implementation of Heap Sort

    #include <iostream>
    using namespace std;
    
    // To heapify a subtree rooted with node i
    // which is an index in arr[].
    // n is size of heap
    void heapify(int arr[], int N, int i)
    {
    
        // Initialize largest as root
        int largest = i;
    
        // left = 2*i + 1
        int l = 2 * i + 1;
    
        // right = 2*i + 2
        int r = 2 * i + 2;
    
        // If left child is larger than root
        if (l < N && arr[l] > arr[largest])
            largest = l;
    
        // If right child is larger than largest
        // so far
        if (r < N && arr[r] > arr[largest])
            largest = r;
    
        // If largest is not root
        if (largest != i) {
            swap(arr[i], arr[largest]);
    
            // Recursively heapify the affected
            // sub-tree
            heapify(arr, N, largest);
        }
    }
    
    // Main function to do heap sort
    void heapSort(int arr[], int N)
    {
    
        // Build heap (rearrange array)
        for (int i = N / 2 - 1; i >= 0; i--)
            heapify(arr, N, i);
    
        // One by one extract an element
        // from heap
        for (int i = N - 1; i > 0; i--) {
    
            // Move current root to end
            swap(arr[0], arr[i]);
    
            // call max heapify on the reduced heap
            heapify(arr, i, 0);
        }
    }
    
    // A utility function to print array of size n
    void printArray(int arr[], int N)
    {
        for (int i = 0; i < N; ++i)
            cout << arr[i] << " ";
        cout << "\n";
    }
    
    // Driver's code
    int main()
    {
        int arr[] = { 12, 11, 13, 5, 6, 7 };
        int N = sizeof(arr) / sizeof(arr[0]);
    
        // Function call
        heapSort(arr, N);
    
        cout << "Sorted array is \n";
        printArray(arr, N);
    }
    `],
    Python: ['python',`# Python program for implementation of heap Sort

    # To heapify subtree rooted at index i.
    # n is size of heap
    
    
    def heapify(arr, N, i):
        largest = i # Initialize largest as root
        l = 2 * i + 1	 # left = 2*i + 1
        r = 2 * i + 2	 # right = 2*i + 2
    
        # See if left child of root exists and is
        # greater than root
        if l < N and arr[largest] < arr[l]:
            largest = l
    
        # See if right child of root exists and is
        # greater than root
        if r < N and arr[largest] < arr[r]:
            largest = r
    
        # Change root, if needed
        if largest != i:
            arr[i], arr[largest] = arr[largest], arr[i] # swap
    
            # Heapify the root.
            heapify(arr, N, largest)
    
    # The main function to sort an array of given size
    
    
    def heapSort(arr):
        N = len(arr)
    
        # Build a maxheap.
        for i in range(N//2 - 1, -1, -1):
            heapify(arr, N, i)
    
        # One by one extract elements
        for i in range(N-1, 0, -1):
            arr[i], arr[0] = arr[0], arr[i] # swap
            heapify(arr, i, 0)
    
    
    # Driver's code
    if __name__ == '__main__':
        arr = [12, 11, 13, 5, 6, 7]
    
        # Function call
        heapSort(arr)
        N = len(arr)
    
        print("Sorted array is")
        for i in range(N):
            print("%d" % arr[i], end=" ")
    # This code is contributed by Mohit Kumra
    
    
`],
Java: ['java',`// Java program for implementation of Heap Sort

public class HeapSort {
	public void sort(int arr[])
	{
		int N = arr.length;

		// Build heap (rearrange array)
		for (int i = N / 2 - 1; i >= 0; i--)
			heapify(arr, N, i);

		// One by one extract an element from heap
		for (int i = N - 1; i > 0; i--) {
			// Move current root to end
			int temp = arr[0];
			arr[0] = arr[i];
			arr[i] = temp;

			// call max heapify on the reduced heap
			heapify(arr, i, 0);
		}
	}

	// To heapify a subtree rooted with node i which is
	// an index in arr[]. n is size of heap
	void heapify(int arr[], int N, int i)
	{
		int largest = i; // Initialize largest as root
		int l = 2 * i + 1; // left = 2*i + 1
		int r = 2 * i + 2; // right = 2*i + 2

		// If left child is larger than root
		if (l < N && arr[l] > arr[largest])
			largest = l;

		// If right child is larger than largest so far
		if (r < N && arr[r] > arr[largest])
			largest = r;

		// If largest is not root
		if (largest != i) {
			int swap = arr[i];
			arr[i] = arr[largest];
			arr[largest] = swap;

			// Recursively heapify the affected sub-tree
			heapify(arr, N, largest);
		}
	}

	/* A utility function to print array of size n */
	static void printArray(int arr[])
	{
		int N = arr.length;

		for (int i = 0; i < N; ++i)
			System.out.print(arr[i] + " ");
		System.out.println();
	}

	// Driver's code
	public static void main(String args[])
	{
		int arr[] = { 12, 11, 13, 5, 6, 7 };
		int N = arr.length;

		// Function call
		HeapSort ob = new HeapSort();
		ob.sort(arr);

		System.out.println("Sorted array is");
		printArray(arr);
	}
}

`],
'C#':['csharp',`// C# program for implementation of Heap Sort
using System;

public class HeapSort {
	public void sort(int[] arr)
	{
		int N = arr.Length;

		// Build heap (rearrange array)
		for (int i = N / 2 - 1; i >= 0; i--)
			heapify(arr, N, i);

		// One by one extract an element from heap
		for (int i = N - 1; i > 0; i--) {
			// Move current root to end
			int temp = arr[0];
			arr[0] = arr[i];
			arr[i] = temp;

			// call max heapify on the reduced heap
			heapify(arr, i, 0);
		}
	}

	// To heapify a subtree rooted with node i which is
	// an index in arr[]. n is size of heap
	void heapify(int[] arr, int N, int i)
	{
		int largest = i; // Initialize largest as root
		int l = 2 * i + 1; // left = 2*i + 1
		int r = 2 * i + 2; // right = 2*i + 2

		// If left child is larger than root
		if (l < N && arr[l] > arr[largest])
			largest = l;

		// If right child is larger than largest so far
		if (r < N && arr[r] > arr[largest])
			largest = r;

		// If largest is not root
		if (largest != i) {
			int swap = arr[i];
			arr[i] = arr[largest];
			arr[largest] = swap;

			// Recursively heapify the affected sub-tree
			heapify(arr, N, largest);
		}
	}

	/* A utility function to print array of size n */
	static void printArray(int[] arr)
	{
		int N = arr.Length;
		for (int i = 0; i < N; ++i)
			Console.Write(arr[i] + " ");
		Console.Read();
	}

	// Driver's code
	public static void Main()
	{
		int[] arr = { 12, 11, 13, 5, 6, 7 };
		int N = arr.Length;

		// Function call
		HeapSort ob = new HeapSort();
		ob.sort(arr);

		Console.WriteLine("Sorted array is");
		printArray(arr);
	}
}

// This code is contributed
// by Akanksha Rai(Abby_akku)


`],
PHP: ['php',`<?php

// Php program for implementation of Heap Sort

// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
function heapify(&$arr, $N, $i)
{
	$largest = $i; // Initialize largest as root
	$l = 2*$i + 1; // left = 2*i + 1
	$r = 2*$i + 2; // right = 2*i + 2

	// If left child is larger than root
	if ($l < $N && $arr[$l] > $arr[$largest])
		$largest = $l;

	// If right child is larger than largest so far
	if ($r < $N && $arr[$r] > $arr[$largest])
		$largest = $r;

	// If largest is not root
	if ($largest != $i)
	{
		$swap = $arr[$i];
		$arr[$i] = $arr[$largest];
		$arr[$largest] = $swap;

		// Recursively heapify the affected sub-tree
		heapify($arr, $N, $largest);
	}
}

// main function to do heap sort
function heapSort(&$arr, $N)
{
	// Build heap (rearrange array)
	for ($i = $N / 2 - 1; $i >= 0; $i--)
		heapify($arr, $N, $i);

	// One by one extract an element from heap
	for ($i = $N-1; $i > 0; $i--)
	{
		// Move current root to end
		$temp = $arr[0];
			$arr[0] = $arr[$i];
			$arr[$i] = $temp;

		// call max heapify on the reduced heap
		heapify($arr, $i, 0);
	}
}

/* A utility function to print array of size n */
function printArray(&$arr, $N)
{
	for ($i = 0; $i < $N; ++$i)
		echo ($arr[$i]." ") ;
		
}

	// Driver's program
	$arr = array(12, 11, 13, 5, 6, 7);
	$N = sizeof($arr)/sizeof($arr[0]);
	
	// Function call
	heapSort($arr, $N);

	echo 'Sorted array is ' . "\n";
	
	printArray($arr , $N);

// This code is contributed by Shivi_Aggarwal
?>



`],
Javascript:['javascript',`// JavaScript program for implementation
// of Heap Sort

	function sort( arr)
	{
		var N = arr.length;

		// Build heap (rearrange array)
		for (var i = Math.floor(N / 2) - 1; i >= 0; i--)
			heapify(arr, N, i);

		// One by one extract an element from heap
		for (var i = N - 1; i > 0; i--) {
			// Move current root to end
			var temp = arr[0];
			arr[0] = arr[i];
			arr[i] = temp;

			// call max heapify on the reduced heap
			heapify(arr, i, 0);
		}
	}

	// To heapify a subtree rooted with node i which is
	// an index in arr[]. n is size of heap
	function heapify(arr, N, i)
	{
		var largest = i; // Initialize largest as root
		var l = 2 * i + 1; // left = 2*i + 1
		var r = 2 * i + 2; // right = 2*i + 2

		// If left child is larger than root
		if (l < N && arr[l] > arr[largest])
			largest = l;

		// If right child is larger than largest so far
		if (r < N && arr[r] > arr[largest])
			largest = r;

		// If largest is not root
		if (largest != i) {
			var swap = arr[i];
			arr[i] = arr[largest];
			arr[largest] = swap;

			// Recursively heapify the affected sub-tree
			heapify(arr, N, largest);
		}
	}

	/* A utility function to print array of size n */
	function printArray(arr)
	{
		var N = arr.length;
		for (var i = 0; i < N; ++i)
			document.write(arr[i] + " ");
		
	}


	var arr = [12, 11, 13, 5, 6, 7];
	var N = arr.length;

	sort(arr);

	document.write( "Sorted array is");
	printArray(arr, N);


// This code is contributed by SoumikMondal

`]
}

export const InsertionSortCode = {
'C++': ['cpp', `// C++ program for insertion sort
#include <bits/stdc++.h>
using namespace std;

// Function to sort an array using
// insertion sort
void insertionSort(int arr[], int n)
{
	int i, key, j;
	for (i = 1; i < n; i++)
	{
		key = arr[i];
		j = i - 1;

		// Move elements of arr[0..i-1],
		// that are greater than key, to one
		// position ahead of their
		// current position
		while (j >= 0 && arr[j] > key)
		{
			arr[j + 1] = arr[j];
			j = j - 1;
		}
		arr[j + 1] = key;
	}
}

// A utility function to print an array
// of size n
void printArray(int arr[], int n)
{
	int i;
	for (i = 0; i < n; i++)
		cout << arr[i] << " ";
	cout << endl;
}

// Driver code
int main()
{
	int arr[] = { 12, 11, 13, 5, 6 };
	int N = sizeof(arr) / sizeof(arr[0]);

	insertionSort(arr, N);
	printArray(arr, N);

	return 0;
}
// This is code is contributed by rathbhupendra
    `],
Python: ['python',`# Python program for implementation of Insertion Sort
# Function to do insertion sort
def insertionSort(arr):

	# Traverse through 1 to len(arr)
	for i in range(1, len(arr)):

		key = arr[i]

		# Move elements of arr[0..i-1], that are
		# greater than key, to one position ahead
		# of their current position
		j = i-1
		while j >= 0 and key < arr[j] :
				arr[j + 1] = arr[j]
				j -= 1
		arr[j + 1] = key


# Driver code to test above
arr = [12, 11, 13, 5, 6]
insertionSort(arr)
for i in range(len(arr)):
	print ("% d" % arr[i])

# This code is contributed by Mohit Kumra

`],
Java:['java',`// Java program for implementation of Insertion Sort
public class InsertionSort {
	/*Function to sort array using insertion sort*/
	void sort(int arr[])
	{
		int n = arr.length;
		for (int i = 1; i < n; ++i) {
			int key = arr[i];
			int j = i - 1;

			/* Move elements of arr[0..i-1], that are
			greater than key, to one position ahead
			of their current position */
			while (j >= 0 && arr[j] > key) {
				arr[j + 1] = arr[j];
				j = j - 1;
			}
			arr[j + 1] = key;
		}
	}

	/* A utility function to print array of size n*/
	static void printArray(int arr[])
	{
		int n = arr.length;
		for (int i = 0; i < n; ++i)
			System.out.print(arr[i] + " ");

		System.out.println();
	}

	// Driver method
	public static void main(String args[])
	{
		int arr[] = { 12, 11, 13, 5, 6 };

		InsertionSort ob = new InsertionSort();
		ob.sort(arr);

		printArray(arr);
	}
};


/* This code is contributed by Rajat Mishra. */
`],
'C#':['csharp',`// Java program for implementation of Insertion Sort
public class InsertionSort {
	/*Function to sort array using insertion sort*/
	void sort(int arr[])
	{
		int n = arr.length;
		for (int i = 1; i < n; ++i) {
			int key = arr[i];
			int j = i - 1;

			/* Move elements of arr[0..i-1], that are
			greater than key, to one position ahead
			of their current position */
			while (j >= 0 && arr[j] > key) {
				arr[j + 1] = arr[j];
				j = j - 1;
			}
			arr[j + 1] = key;
		}
	}

	/* A utility function to print array of size n*/
	static void printArray(int arr[])
	{
		int n = arr.length;
		for (int i = 0; i < n; ++i)
			System.out.print(arr[i] + " ");

		System.out.println();
	}

	// Driver method
	public static void main(String args[])
	{
		int arr[] = { 12, 11, 13, 5, 6 };

		InsertionSort ob = new InsertionSort();
		ob.sort(arr);

		printArray(arr);
	}
};


/* This code is contributed by Rajat Mishra. */

`],
PHP: ['php',`<?php
// PHP program for implementation
// of selection sort
function selection_sort(&$arr, $n)
{
	for($i = 0; $i < $n ; $i++)
	{
		$low = $i;
		for($j = $i + 1; $j < $n ; $j++)
		{
			if ($arr[$j] < $arr[$low])
			{
				$low = $j;
			}
		}
		
		// swap the minimum value to $ith node
		if ($arr[$i] > $arr[$low])
		{
			$tmp = $arr[$i];
			$arr[$i] = $arr[$low];
			$arr[$low] = $tmp;
		}
	}
}

// Driver Code
$arr = array(64, 25, 12, 22, 11);
$len = count($arr);
selection_sort($arr, $len);
echo "Sorted array : \n";

for ($i = 0; $i < $len; $i++)
	echo $arr[$i] . " ";

// This code is contributed
// by Deepika Gupta.
?>
`],
Javascript:['javascript',`<script>
// Javascript program for implementation of selection sort
function swap(arr,xp, yp)
{
	var temp = arr[xp];
	arr[xp] = arr[yp];
	arr[yp] = temp;
}

function selectionSort(arr, n)
{
	var i, j, min_idx;

	// One by one move boundary of unsorted subarray
	for (i = 0; i < n-1; i++)
	{
		// Find the minimum element in unsorted array
		min_idx = i;
		for (j = i + 1; j < n; j++)
		if (arr[j] < arr[min_idx])
			min_idx = j;

		// Swap the found minimum element with the first element
		swap(arr,min_idx, i);
	}
}

function printArray( arr, size)
{
	var i;
	for (i = 0; i < size; i++)
		document.write(arr[i] + " ");
	document.write(" <br>");
}

var arr = [64, 25, 12, 22, 11];
	var n = 5;
	selectionSort(arr, n);
	document.write("Sorted array: <br>");
	printArray(arr, n);

// This code is contributed by akshitsaxenaa09.
</script>
`]
}

export const MergeSortCode = {
    'C++': ['cpp', `// C++ program for Merge Sort
    #include <iostream>
    using namespace std;
    
    // Merges two subarrays of array[].
    // First subarray is arr[begin..mid]
    // Second subarray is arr[mid+1..end]
    void merge(int array[], int const left, int const mid,
            int const right)
    {
        auto const subArrayOne = mid - left + 1;
        auto const subArrayTwo = right - mid;
    
        // Create temp arrays
        auto *leftArray = new int[subArrayOne],
            *rightArray = new int[subArrayTwo];
    
        // Copy data to temp arrays leftArray[] and rightArray[]
        for (auto i = 0; i < subArrayOne; i++)
            leftArray[i] = array[left + i];
        for (auto j = 0; j < subArrayTwo; j++)
            rightArray[j] = array[mid + 1 + j];
    
        auto indexOfSubArrayOne
            = 0, // Initial index of first sub-array
            indexOfSubArrayTwo
            = 0; // Initial index of second sub-array
        int indexOfMergedArray
            = left; // Initial index of merged array
    
        // Merge the temp arrays back into array[left..right]
        while (indexOfSubArrayOne < subArrayOne
            && indexOfSubArrayTwo < subArrayTwo) {
            if (leftArray[indexOfSubArrayOne]
                <= rightArray[indexOfSubArrayTwo]) {
                array[indexOfMergedArray]
                    = leftArray[indexOfSubArrayOne];
                indexOfSubArrayOne++;
            }
            else {
                array[indexOfMergedArray]
                    = rightArray[indexOfSubArrayTwo];
                indexOfSubArrayTwo++;
            }
            indexOfMergedArray++;
        }
        // Copy the remaining elements of
        // left[], if there are any
        while (indexOfSubArrayOne < subArrayOne) {
            array[indexOfMergedArray]
                = leftArray[indexOfSubArrayOne];
            indexOfSubArrayOne++;
            indexOfMergedArray++;
        }
        // Copy the remaining elements of
        // right[], if there are any
        while (indexOfSubArrayTwo < subArrayTwo) {
            array[indexOfMergedArray]
                = rightArray[indexOfSubArrayTwo];
            indexOfSubArrayTwo++;
            indexOfMergedArray++;
        }
        delete[] leftArray;
        delete[] rightArray;
    }
    
    // begin is for left index and end is
    // right index of the sub-array
    // of arr to be sorted */
    void mergeSort(int array[], int const begin, int const end)
    {
        if (begin >= end)
            return; // Returns recursively
    
        auto mid = begin + (end - begin) / 2;
        mergeSort(array, begin, mid);
        mergeSort(array, mid + 1, end);
        merge(array, begin, mid, end);
    }
    
    // UTILITY FUNCTIONS
    // Function to print an array
    void printArray(int A[], int size)
    {
        for (auto i = 0; i < size; i++)
            cout << A[i] << " ";
    }
    
    // Driver code
    int main()
    {
        int arr[] = { 12, 11, 13, 5, 6, 7 };
        auto arr_size = sizeof(arr) / sizeof(arr[0]);
    
        cout << "Given array is \n";
        printArray(arr, arr_size);
    
        mergeSort(arr, 0, arr_size - 1);
    
        cout << "\nSorted array is \n";
        printArray(arr, arr_size);
        return 0;
    }
    
    // This code is contributed by Mayank Tyagi
    // This code was revised by Joshua Estes
    `],
    Python: ['python',`# Python program for implementation of MergeSort
    def mergeSort(arr):
        if len(arr) > 1:
    
            # Finding the mid of the array
            mid = len(arr)//2
    
            # Dividing the array elements
            L = arr[:mid]
    
            # into 2 halves
            R = arr[mid:]
    
            # Sorting the first half
            mergeSort(L)
    
            # Sorting the second half
            mergeSort(R)
    
            i = j = k = 0
    
            # Copy data to temp arrays L[] and R[]
            while i < len(L) and j < len(R):
                if L[i] <= R[j]:
                    arr[k] = L[i]
                    i += 1
                else:
                    arr[k] = R[j]
                    j += 1
                k += 1
    
            # Checking if any element was left
            while i < len(L):
                arr[k] = L[i]
                i += 1
                k += 1
    
            while j < len(R):
                arr[k] = R[j]
                j += 1
                k += 1
    
    # Code to print the list
    
    
    def printList(arr):
        for i in range(len(arr)):
            print(arr[i], end=" ")
        print()
    
    
    # Driver Code
    if __name__ == '__main__':
        arr = [12, 11, 13, 5, 6, 7]
        print("Given array is", end="\n")
        printList(arr)
        mergeSort(arr)
        print("Sorted array is: ", end="\n")
        printList(arr)
    
    # This code is contributed by Mayank Khanna
    
    
`],
Java: ['java',`/* Java program for Merge Sort */
class MergeSort {
	// Merges two subarrays of arr[].
	// First subarray is arr[l..m]
	// Second subarray is arr[m+1..r]
	void merge(int arr[], int l, int m, int r)
	{
		// Find sizes of two subarrays to be merged
		int n1 = m - l + 1;
		int n2 = r - m;

		/* Create temp arrays */
		int L[] = new int[n1];
		int R[] = new int[n2];

		/*Copy data to temp arrays*/
		for (int i = 0; i < n1; ++i)
			L[i] = arr[l + i];
		for (int j = 0; j < n2; ++j)
			R[j] = arr[m + 1 + j];

		/* Merge the temp arrays */

		// Initial indexes of first and second subarrays
		int i = 0, j = 0;

		// Initial index of merged subarray array
		int k = l;
		while (i < n1 && j < n2) {
			if (L[i] <= R[j]) {
				arr[k] = L[i];
				i++;
			}
			else {
				arr[k] = R[j];
				j++;
			}
			k++;
		}

		/* Copy remaining elements of L[] if any */
		while (i < n1) {
			arr[k] = L[i];
			i++;
			k++;
		}

		/* Copy remaining elements of R[] if any */
		while (j < n2) {
			arr[k] = R[j];
			j++;
			k++;
		}
	}

	// Main function that sorts arr[l..r] using
	// merge()
	void sort(int arr[], int l, int r)
	{
		if (l < r) {
			// Find the middle point
			int m = l + (r - l) / 2;

			// Sort first and second halves
			sort(arr, l, m);
			sort(arr, m + 1, r);

			// Merge the sorted halves
			merge(arr, l, m, r);
		}
	}

	/* A utility function to print array of size n */
	static void printArray(int arr[])
	{
		int n = arr.length;
		for (int i = 0; i < n; ++i)
			System.out.print(arr[i] + " ");
		System.out.println();
	}

	// Driver code
	public static void main(String args[])
	{
		int arr[] = { 12, 11, 13, 5, 6, 7 };

		System.out.println("Given Array");
		printArray(arr);

		MergeSort ob = new MergeSort();
		ob.sort(arr, 0, arr.length - 1);

		System.out.println("\nSorted array");
		printArray(arr);
	}
}
/* This code is contributed by Rajat Mishra */

`],
'C#':['csharp',`/* Java program for Merge Sort */
class MergeSort {
	// Merges two subarrays of arr[].
	// First subarray is arr[l..m]
	// Second subarray is arr[m+1..r]
	void merge(int arr[], int l, int m, int r)
	{
		// Find sizes of two subarrays to be merged
		int n1 = m - l + 1;
		int n2 = r - m;

		/* Create temp arrays */
		int L[] = new int[n1];
		int R[] = new int[n2];

		/*Copy data to temp arrays*/
		for (int i = 0; i < n1; ++i)
			L[i] = arr[l + i];
		for (int j = 0; j < n2; ++j)
			R[j] = arr[m + 1 + j];

		/* Merge the temp arrays */

		// Initial indexes of first and second subarrays
		int i = 0, j = 0;

		// Initial index of merged subarray array
		int k = l;
		while (i < n1 && j < n2) {
			if (L[i] <= R[j]) {
				arr[k] = L[i];
				i++;
			}
			else {
				arr[k] = R[j];
				j++;
			}
			k++;
		}

		/* Copy remaining elements of L[] if any */
		while (i < n1) {
			arr[k] = L[i];
			i++;
			k++;
		}

		/* Copy remaining elements of R[] if any */
		while (j < n2) {
			arr[k] = R[j];
			j++;
			k++;
		}
	}

	// Main function that sorts arr[l..r] using
	// merge()
	void sort(int arr[], int l, int r)
	{
		if (l < r) {
			// Find the middle point
			int m = l + (r - l) / 2;

			// Sort first and second halves
			sort(arr, l, m);
			sort(arr, m + 1, r);

			// Merge the sorted halves
			merge(arr, l, m, r);
		}
	}

	/* A utility function to print array of size n */
	static void printArray(int arr[])
	{
		int n = arr.length;
		for (int i = 0; i < n; ++i)
			System.out.print(arr[i] + " ");
		System.out.println();
	}

	// Driver code
	public static void main(String args[])
	{
		int arr[] = { 12, 11, 13, 5, 6, 7 };

		System.out.println("Given Array");
		printArray(arr);

		MergeSort ob = new MergeSort();
		ob.sort(arr, 0, arr.length - 1);

		System.out.println("\nSorted array");
		printArray(arr);
	}
}
/* This code is contributed by Rajat Mishra */

`],
PHP: ['php',`<?php
/* PHP recursive program for Merge Sort */

// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
function merge(&$arr, $l, $m, $r)
{
	$n1 = $m - $l + 1;
	$n2 = $r - $m;

	/* create temp arrays */
	$L = array();
	$R = array();
	/* Copy data to temp arrays L[] and R[] */
	for ($i = 0; $i < $n1; $i++)
		$L[$i] = $arr[$l + $i];
	for ($j = 0; $j < $n2; $j++)
		$R[$j] = $arr[$m + 1 + $j];

	/* Merge the temp arrays back into arr[l..r]*/
	$i = 0; // Initial index of first subarray
	$j = 0; // Initial index of second subarray
	$k = $l; // Initial index of merged subarray
	while ($i < $n1 && $j < $n2) {
		if ($L[$i] <= $R[$j]) {
			$arr[$k] = $L[$i];
			$i++;
		}
		else {
			$arr[$k] = $R[$j];
			$j++;
		}
		$k++;
	}

	/* Copy the remaining elements of L[], if there
	are any */
	while ($i < $n1) {
		$arr[$k] = $L[$i];
		$i++;
		$k++;
	}

	/* Copy the remaining elements of R[], if there
	are any */
	while ($j < $n2) {
		$arr[$k] = $R[$j];
		$j++;
		$k++;
	}
}
/*

*/
/* l is for left index and r is right index of the
sub-array of arr to be sorted */
function mergeSort(&$arr, $l, $r)
{
	if ($l < $r) {
		// Same as (l+r)/2, but avoids overflow for
		// large l and h
		$m = $l + (int)(($r - $l) / 2);

		// Sort first and second halves
		mergeSort($arr, $l, $m);
		mergeSort($arr, $m + 1, $r);

		merge($arr, $l, $m, $r);
	}
}

/* UTILITY FUNCTIONS */
/* Function to print an array */
function printArray($A, $size)
{
	for ($i = 0; $i < $size; $i++)
		echo $A[$i]." ";
	echo "\n";
}

/* Driver code */
$arr = array(12, 11, 13, 5, 6, 7);
$arr_size = sizeof($arr);

echo "Given array is \n";
printArray($arr, $arr_size);

mergeSort($arr, 0, $arr_size - 1);

echo "\nSorted array is \n";
printArray($arr, $arr_size);
return 0;
//This code is contributed by Susobhan Akhuli
?>

`],
Javascript:['javascript',`<script>

// JavaScript program for Merge Sort

// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
function merge(arr, l, m, r)
{
	var n1 = m - l + 1;
	var n2 = r - m;

	// Create temp arrays
	var L = new Array(n1);
	var R = new Array(n2);

	// Copy data to temp arrays L[] and R[]
	for (var i = 0; i < n1; i++)
		L[i] = arr[l + i];
	for (var j = 0; j < n2; j++)
		R[j] = arr[m + 1 + j];

	// Merge the temp arrays back into arr[l..r]

	// Initial index of first subarray
	var i = 0;

	// Initial index of second subarray
	var j = 0;

	// Initial index of merged subarray
	var k = l;

	while (i < n1 && j < n2) {
		if (L[i] <= R[j]) {
			arr[k] = L[i];
			i++;
		}
		else {
			arr[k] = R[j];
			j++;
		}
		k++;
	}

	// Copy the remaining elements of
	// L[], if there are any
	while (i < n1) {
		arr[k] = L[i];
		i++;
		k++;
	}

	// Copy the remaining elements of
	// R[], if there are any
	while (j < n2) {
		arr[k] = R[j];
		j++;
		k++;
	}
}

// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */
function mergeSort(arr,l, r){
	if(l>=r){
		return;//returns recursively
	}
	var m =l+ parseInt((r-l)/2);
	mergeSort(arr,l,m);
	mergeSort(arr,m+1,r);
	merge(arr,l,m,r);
}

// UTILITY FUNCTIONS
// Function to print an array
function printArray( A, size)
{
	for (var i = 0; i < size; i++)
	document.write( A[i] + " ");
}


var arr = [ 12, 11, 13, 5, 6, 7 ];
	var arr_size = arr.length;

	document.write( "Given array is <br>");
	printArray(arr, arr_size);

	mergeSort(arr, 0, arr_size - 1);

	document.write( "<br>Sorted array is <br>");
	printArray(arr, arr_size);

// This code is contributed by SoumikMondal

</script>

`]
}

export const QuickSortCode = {
    'C++': ['cpp', `/* C++ implementation of QuickSort */
    #include <bits/stdc++.h>
    using namespace std;
    
    /* This function takes last element as pivot, places
    the pivot element at its correct position in sorted
    array, and places all smaller (smaller than pivot)
    to left of pivot and all greater elements to right
    of pivot */
    int partition(int arr[], int low, int high)
    {
        int pivot = arr[high]; // pivot
        int i
            = (low
            - 1); // Index of smaller element and indicates
                    // the right position of pivot found so far
    
        for (int j = low; j <= high - 1; j++) {
            // If current element is smaller than the pivot
            if (arr[j] < pivot) {
                i++; // increment index of smaller element
                swap(arr[i], arr[j]);
            }
        }
        swap(arr[i + 1], arr[high]);
        return (i + 1);
    }
    
    /* The main function that implements QuickSort
    arr[] --> Array to be sorted,
    low --> Starting index,
    high --> Ending index */
    void quickSort(int arr[], int low, int high)
    {
        if (low < high) {
            /* pi is partitioning index, arr[p] is now
            at right place */
            int pi = partition(arr, low, high);
    
            // Separately sort elements before
            // partition and after partition
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }
    
    /* Function to print an array */
    void printArray(int arr[], int size)
    {
        int i;
        for (i = 0; i < size; i++)
            cout << arr[i] << " ";
        cout << endl;
    }
    
    // Driver Code
    int main()
    {
        int arr[] = { 10, 7, 8, 9, 1, 5 };
        int n = sizeof(arr) / sizeof(arr[0]);
        quickSort(arr, 0, n - 1);
        cout << "Sorted array: \n";
        printArray(arr, n);
        return 0;
    }
    
    // This code is contributed by rathbhupendra
    `],
    Python: ['python',`# Python3 implementation of QuickSort


    # Function to find the partition position
    def partition(array, low, high):
    
        # Choose the rightmost element as pivot
        pivot = array[high]
    
        # Pointer for greater element
        i = low - 1
    
        # Traverse through all elements
        # compare each element with pivot
        for j in range(low, high):
            if array[j] <= pivot:
                # If element smaller than pivot is found
                # swap it with the greater element pointed by i
                i = i + 1
    
                # Swapping element at i with element at j
                (array[i], array[j]) = (array[j], array[i])
    
        # Swap the pivot element with
        # e greater element specified by i
        (array[i + 1], array[high]) = (array[high], array[i + 1])
    
        # Return the position from where partition is done
        return i + 1
    
    # Function to perform quicksort
    
    
    def quick_sort(array, low, high):
        if low < high:
    
            # Find pivot element such that
            # element smaller than pivot are on the left
            # element greater than pivot are on the right
            pi = partition(array, low, high)
    
            # Recursive call on the left of pivot
            quick_sort(array, low, pi - 1)
    
            # Recursive call on the right of pivot
            quick_sort(array, pi + 1, high)
    
    
    # Driver code
    array = [10, 7, 8, 9, 1, 5]
    quick_sort(array, 0, len(array) - 1)
    
    print(f'Sorted array: {array}')
    
    # This code is contributed by Adnan Aliakbar
    
`],
Java: ['java',`// Java implementation of QuickSort
import java.io.*;

class GFG {

	// A utility function to swap two elements
	static void swap(int[] arr, int i, int j)
	{
		int temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}

	/* This function takes last element as pivot, places
	the pivot element at its correct position in sorted
	array, and places all smaller (smaller than pivot)
	to left of pivot and all greater elements to right
	of pivot */
	static int partition(int[] arr, int low, int high)
	{

		// pivot
		int pivot = arr[high];

		// Index of smaller element and
		// indicates the right position
		// of pivot found so far
		int i = (low - 1);

		for (int j = low; j <= high - 1; j++) {

			// If current element is smaller
			// than the pivot
			if (arr[j] < pivot) {

				// Increment index of
				// smaller element
				i++;
				swap(arr, i, j);
			}
		}
		swap(arr, i + 1, high);
		return (i + 1);
	}

	/* The main function that implements QuickSort
			arr[] --> Array to be sorted,
			low --> Starting index,
			high --> Ending index
	*/
	static void quickSort(int[] arr, int low, int high)
	{
		if (low < high) {

			// pi is partitioning index, arr[p]
			// is now at right place
			int pi = partition(arr, low, high);

			// Separately sort elements before
			// partition and after partition
			quickSort(arr, low, pi - 1);
			quickSort(arr, pi + 1, high);
		}
	}

	// Function to print an array
	static void printArray(int[] arr, int size)
	{
		for (int i = 0; i < size; i++)
			System.out.print(arr[i] + " ");

		System.out.println();
	}

	// Driver Code
	public static void main(String[] args)
	{
		int[] arr = { 10, 7, 8, 9, 1, 5 };
		int n = arr.length;

		quickSort(arr, 0, n - 1);
		System.out.println("Sorted array: ");
		printArray(arr, n);
	}
}

// This code is contributed by Ayush Choudhary

`],
'C#':['csharp',`// C# implementation of QuickSort

using System;

class GFG {

	// A utility function to swap two elements
	static void swap(int[] arr, int i, int j)
	{
		int temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}

	/* This function takes last element as pivot, places
		the pivot element at its correct position in sorted
		array, and places all smaller (smaller than pivot)
		to left of pivot and all greater elements to right
		of pivot */
	static int partition(int[] arr, int low, int high)
	{

		// pivot
		int pivot = arr[high];

		// Index of smaller element and
		// indicates the right position
		// of pivot found so far
		int i = (low - 1);

		for (int j = low; j <= high - 1; j++) {

			// If current element is smaller
			// than the pivot
			if (arr[j] < pivot) {

				// Increment index of
				// smaller element
				i++;
				swap(arr, i, j);
			}
		}
		swap(arr, i + 1, high);
		return (i + 1);
	}

	/* The main function that implements QuickSort
				arr[] --> Array to be sorted,
				low --> Starting index,
				high --> Ending index
	*/
	static void quickSort(int[] arr, int low, int high)
	{
		if (low < high) {

			// pi is partitioning index, arr[p]
			// is now at right place
			int pi = partition(arr, low, high);

			// Separately sort elements before
			// partition and after partition
			quickSort(arr, low, pi - 1);
			quickSort(arr, pi + 1, high);
		}
	}

	// Function to print an array
	static void printArray(int[] arr, int size)
	{
		for (int i = 0; i < size; i++)
			Console.Write(arr[i] + " ");

		Console.WriteLine();
	}

	// Driver Code
	public static void Main()
	{
		int[] arr = { 10, 7, 8, 9, 1, 5 };
		int n = arr.Length;

		quickSort(arr, 0, n - 1);
		Console.Write("Sorted array: ");
		printArray(arr, n);
	}
}

// This code is contributed by gfgking



`],
PHP: ['php',`<?php
function quicksort($array) {
	$length = count($array);
	if($length <= 1) {
		return $array;
	} else {
		$pivot = $array[0];
		$left = $right = array();
		for($i = 1; $i < count($array); $i++) {
			if($array[$i] < $pivot) {
				$left[] = $array[$i];
			} else {
				$right[] = $array[$i];
			}
		}
		return array_merge(quicksort($left), array($pivot), quicksort($right));
	}
}
$array = array(10, 7, 8, 9, 1, 5);
$sortedArray = quicksort($array);
foreach ($sortedArray as $key=>$item){
	echo "$item ";
}
?>

`],
Javascript:['javascript',`function quicksort(array) {
	if (array.length <= 1) {
		return array;
	} else {
		var pivot = array[0];
		var left = [];
		var right = [];
		for (var i = 1; i < array.length; i++) {
			if (array[i] < pivot) {
				left.push(array[i]);
			} else {
				right.push(array[i]);
			}
		}
		return quicksort(left).concat(pivot, quicksort(right));
	}
}
var array = [10, 5, 2, 3, 7, 6, 8, 9, 1, 4];
var sortedArray = quicksort(array);
console.log(sortedArray);


`]
}























