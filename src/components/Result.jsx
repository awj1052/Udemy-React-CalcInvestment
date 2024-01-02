import { memo } from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

function Result({data}){

    const annualData = calculateInvestmentResults(data);
    const initialInvestment = annualData.length ? annualData[0].valueEndOfYear - annualData[0].interest - annualData[0].annualInvestment : null;

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {annualData.map((data, dataIndex)=>{
                   
                    const totalInterest = data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment;
                    const totalAmountInvested = data.valueEndOfYear - totalInterest;

                   return (
                    <tr key={`result-tr-${dataIndex}`}>
                        <td>{data.year}</td>
                        <td>{formatter.format(data.valueEndOfYear)}</td>
                        <td>{formatter.format(data.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                   );
                })

                }
            </tbody>
        </table>
    );

}

export default memo (Result);