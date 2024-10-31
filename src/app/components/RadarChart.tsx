import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    Tooltip,
    Legend,
    RadialLinearScale,
    Filler,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { Stat } from "../typescript/PokemonData";

ChartJS.register(
    LineElement,
    PointElement,
    Tooltip,
    Legend,
    RadialLinearScale,
    Filler,
);

export default function RadarChart({ pokemonStats }: { pokemonStats: Stat[] }) {
    const formatStatName = (name: string) => {
        switch (name) {
            case "hp":
                return "HP";
            case "speed":
                return "Speed";
            case "attack":
                return "Attack";
            case "special-defense":
                return "Sp. Def";
            case "special-attack":
                return "Sp. Atk";
            case "defense":
                return "Defense";
            default:
                return name.charAt(0).toUpperCase() + name.slice(1);
        }
    };

    return (
        <div className="m-auto">
            <Radar
                data={{
                    labels: pokemonStats.map((stat) =>
                        formatStatName(stat.stat.name),
                    ),
                    datasets: [
                        {
                            label: "Base Stats",
                            data: pokemonStats.map((stat) => stat.base_stat),
                            backgroundColor: "rgba(250, 204, 21, 0.5)",
                            borderColor: "rgb(250 204 21)",
                            borderWidth: 1,
                            pointRadius: 0,
                            pointHitRadius: 10,
                        },
                    ],
                }}
                options={{
                    scales: {
                        r: {
                            suggestedMin: 0,
                            suggestedMax: 200,
                            backgroundColor: "#242424",
                            pointLabels: {
                                color: "white",
                                font: {
                                    size: 14,
                                },
                            },
                            grid: {
                                color: "white",
                            },
                            angleLines: {
                                color: "white",
                            },
                            ticks: {
                                display: false,
                                maxTicksLimit: 1,
                            },
                        },
                    },
                    plugins: {
                        legend: {
                            display: false,
                        },
                        tooltip: {
                            enabled: true,
                            callbacks: {
                                label: function (context) {
                                    return `${context.label}: ${context.raw}`;
                                },
                            },
                        },
                    },
                }}
            ></Radar>
        </div>
    );
}
