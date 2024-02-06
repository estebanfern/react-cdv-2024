import React from "react";
import { getClases, getInstructores } from "./service/CursoService.js";

export default function BasicCard() {
    return (
        <React.Fragment>
            <div className="card">
                <h2>Clases</h2>
                <div>
                    {getClases().map((e, index) => {
                        return (
                            <p key={index}>{e}</p>
                        )
                    })}
                </div>
                <h2>Instructores</h2>
                <div>
                    {getInstructores().map((e, index) => {
                        return (
                            <p key={index}>{e}</p>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

