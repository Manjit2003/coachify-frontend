import { useEffect, useState } from "react";

const TicTacToe = () => {
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

    const [turn, setTurn] = useState("X");

    const playTurn = (keyOne: string) => {
        if (grid[keyOne] != "") {
            return;
        }
        setGrid({
            ...grid,
            [keyOne]: turn,
        });
        turn == "X" ? setTurn("O") : setTurn("X");
    };

    const checkWinner = () => {
        for (const combination of winningCombinations) {
            const [a, b, c] = combination;

            if ([grid[a], grid[b], grid[c]].includes("")) {
                return;
            }

            console.log(combination);

            if (grid[a] == grid[b] && grid[b] == grid[c]) {
                alert("Winner is " + turn);
                console.log([grid[a], grid[b], grid[c]]);

                break;
            }
        }
    };

    useEffect(() => {
        checkWinner();
    }, [grid]);

    return (
        <div className="grid grid-cols-3 gap-4 w-72 p-10">
            {Object.keys(grid).map((key) => {
                return (
                    <button
                        className="bg-red-600 p-4 text-white rounded-md"
                        onClick={() => {
                            playTurn(key);
                        }}
                    >
                        {grid[key]}
                    </button>
                );
            })}
        </div>
    );
};

export default TicTacToe;
