import React, { Component } from 'react';
import { API_URL } from './Constants'; 
import $ from 'jquery';

import Race from './Race';
import { Table } from 'react-bootstrap';


class Season extends Component  {
    constructor(props) {
        super(props);
        this.state = {race: [],winnerOfYear:''};
    }

    componentDidMount() {
        this.SeasonList();
        this.WinnerOfYear();
    }

    SeasonList() {
        return $.getJSON( API_URL + this.props.year + ".json")
            .then((data) => {
                this.setState({ race: data.MRData.RaceTable.Races });
            });
    }

    WinnerOfYear() {
        return $.getJSON( API_URL + this.props.year + "/driverStandings/1.json")
            .then((data) => {
                this.setState({ winnerOfYear: data.MRData.StandingsTable.StandingsLists[0].DriverStandings });
            });
    }

    render() {

        const races = this.state.race.map((item, i) => {
            const winnerDriver = (this.state.winnerOfYear && this.state.winnerOfYear[0].Driver.driverId) ? this.state.winnerOfYear[0].Driver.driverId : null ;
            const uniquekey = item.season+i;
            return (
                <Race winnerOfYear={winnerDriver} raceItem={item} key={uniquekey}></Race>
            );
        });

        return (
            <div>
                <Table bordered condensed hover>
                    <thead>
                    <tr>
                        <th># Round</th>
                        <th>Race Name</th>
                        <th>Circuit Name</th>
                        <th>Driver name</th>
                    </tr>
                    </thead>
                    <tbody>
                        { races }
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Season;