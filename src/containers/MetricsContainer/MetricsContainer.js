import { AlertOutlined, BugOutlined, PartitionOutlined } from "@ant-design/icons";
import { useState } from "react";
import styles from "./MetricsContainer.module.css";
import { ResponsivePie } from '@nivo/pie'



const MetricsContainer = () => {

    const data = [
        {
          "id": "javascript",
          "label": "javascript",
          "value": 311,
          "color": "hsl(55, 70%, 50%)"
        },
        {
          "id": "elixir",
          "label": "elixir",
          "value": 508,
          "color": "hsl(223, 70%, 50%)"
        },
        {
          "id": "c",
          "label": "c",
          "value": 600,
          "color": "hsl(177, 70%, 50%)"
        },
        {
          "id": "php",
          "label": "php",
          "value": 211,
          "color": "hsl(241, 70%, 50%)"
        },
        {
          "id": "stylus",
          "label": "stylus",
          "value": 125,
          "color": "hsl(248, 70%, 50%)"
        }
      ]
      

    return (
        <div className = {styles.container}>
            <div className = {styles.containerContent}>
                <div className = {styles.ticketMetricsContainer}>
                    <div style = {{fontWeight: "600", margin: "10px 0", fontSize: "15px"}}>Tickets</div>
                    <div className = {styles.typeMetrics}>
                        <div className  = {styles.item}>
                            <span style = {{fontWeight: "bold"}}>Bug reports</span>
                            <div style = {{marginTop: "15px"}}>
                                <span style = {{marginRight: "10px"}}><BugOutlined style = {{fontSize: "20px"}}/></span>
                                <span style = {{fontSize: "20px"}}>0</span>
                            </div>
                        </div>
                        <div className  = {styles.item}>
                            <span style = {{fontWeight: "bold"}}>Feature requests</span>
                            <div style = {{marginTop: "15px"}}>
                                <span style = {{marginRight: "10px"}}><AlertOutlined style = {{fontSize: "20px"}}/></span>
                                <span style = {{fontSize: "20px"}}>0</span>
                            </div>
                        </div>
                        <div className  = {styles.item}>
                            <span style = {{fontWeight: "bold"}}>General feedback</span>
                            <div style = {{marginTop: "15px"}}>
                                <span style = {{marginRight: "10px"}}><PartitionOutlined style = {{fontSize: "20px"}}/></span>
                                <span style = {{fontSize: "20px"}}>0</span>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MetricsContainer;

MetricsContainer.defaultProps = {
    metricsInfo: {
        bug: 0, 
        feature: 0, 
        feedback: 0, 
        openCount: 0, 
        resolvedCount: 0
    }
}