import { useEffect, useState } from "react";

export const TicTacToe = () => {
    const [grid, setGrid] = useState<any>({
        a1: "",
        a2: "",
        a3: "",
        b1: "",
        b2: "",
        b3: "",
        c1: "",
        c2: "",
        c3: "",
    });

    const [turn, setTurn] = useState<any>("X");

    const playTurn = (key: string) => {
        if (grid[key] === "") {
            setGrid({
                ...grid,
                [key]: turn,
            });
            setTurn(turn === "X" ? "O" : "X");
        }
    };

    const reset = () => {
        setGrid({
            a1: "",
            a2: "",
            a3: "",
            b1: "",
            b2: "",
            b3: "",
            c1: "",
            c2: "",
            c3: "",
        });
        setTurn("X");
    };

    const checkWinner = () => {
        const winningCombinations = [
            ["a1", "a2", "a3"],
            ["b1", "b2", "b3"],
            ["c1", "c2", "c3"],
            ["a1", "b1", "c1"],
            ["a2", "b2", "c2"],
            ["a3", "b3", "c3"],
            ["a1", "b2", "c3"],
            ["a3", "b2", "c1"],
        ];

        for (let i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i];

            if (grid[a] !== "" && grid[a] === grid[b] && grid[a] === grid[c]) {
                return grid[a];
            }
        }

        return "";
    };

    useEffect(() => {
        const winner = checkWinner();

        if (winner !== "") {
            alert(`${winner} is the winner!`);
            reset();

            return;
        }

        let filled = true;

        Object.keys(grid).map((key) => {
            if (grid[key] == "") {
                filled = false;
            }
        });

        if (filled) {
            reset();
        }
    }, [grid]);

    return (
        <div className="w-64 h-64">
            <div className="grid grid-cols-3 gap-4">
                {Object.keys(grid).map((key) => (
                    <button
                        type="button"
                        key={key}
                        onClick={() => {
                            playTurn(key);
                        }}
                        className="inline-flex items-center h-12 px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none w-full"
                    >
                        {grid[key]}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TicTacToe;
