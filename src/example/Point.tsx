import React, { useState, useEffect } from 'react';

function fetchPoints() {
	return new Promise<Point[]>((resolved) => {
		setTimeout(() => {
			resolved(
				new Array(100).fill(null).map(() => ({
					x: Math.floor(Math.random() * 100),
					y: Math.floor(Math.random() * 100)
				}))
			);
		}, 100);
	});
}

function getDistance(x: number, y: number) {
	return Math.sqrt(x * x + y * y);
}

function sortPoints(points: Point[], sortBy: SortBy) {
	const temp = [...points];
	return temp.sort((a, b) => a[sortBy] - b[sortBy]);
}
// NOTE: 也可以使用 useReducer 代替
type SortBy = 'x' | 'y';
type Point = { x: number; y: number };
const toggle = (current: SortBy): SortBy => (current === 'x' ? 'y' : 'x');

const Points = () => {
	const [points, setPoints] = useState<Point[]>([]);
	const [maxDistance, setMaxDistance] = useState<number>(100);
	const [sortBy, setSortBy] = useState<SortBy>('x');

	useEffect(() => {
		fetchPoints().then((r) => setPoints(r));
	}, []);

	const otherSortBy = toggle(sortBy);
	const filtedPoints = points.filter(
		(p) => getDistance(p.x, p.y) < maxDistance
	);
	const pointToDisplay = sortPoints(filtedPoints, sortBy).map(
		(p: Point, index) => (
			<li key={`${p.x}|${p.y}${index}`}>
				({p.x}, {p.y})
			</li>
		)
	);

	return (
		<>
			<div style={{ display: 'inline-flex', gap: 8 }}>
				<button onClick={() => setSortBy(otherSortBy)}>
					Sort by: {otherSortBy}
				</button>
				<button onClick={() => setMaxDistance((d) => d + 10)}>
					Increase max distance
				</button>
				<button onClick={() => setMaxDistance((d) => d - 10)}>
					- max distance
				</button>
				<p>
					Showing only points that are less than {maxDistance} units away from
					origin (0, 0) Currently sorted by: `{sortBy}` (ascending)
				</p>
			</div>
			<ol>{pointToDisplay}</ol>
		</>
	);
};
export default Points;
