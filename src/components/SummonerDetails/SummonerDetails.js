import React, {Component} from './node_modules/react';
import SearchBar from '../SearchBar/SearchBar';
import MatchCards from '../MatchCards/MatchCards';
import Axios from '../../axios';
import Aux from '../../hoc/Auxiliary/Auxiliary';

class SummonerDetails extends Component {
    state = {
        serverName: '',
        summonerName: '',
        summonerProfile: null,
        matchListData: null
    };

    getMatchList = () => {
        Axios.get('https://cors-anywhere.herokuapp.com/https://'+ this.state.serverName +'.api.riotgames.com/lol/match/v4/matchlists/by-account/' + this.state.summonerProfile.accountId)
            .then(response => {
                console.log(response.data);
                this.setState({
                    matchListData: response.data
                })
            });
    };

    searchBarClickHandler = (serverName, summonerName) => {
        this.setState({
            summonerName: summonerName,
            serverName: serverName
        });
        console.log("calling " + serverName + ", " + summonerName);
        Axios.get('https://cors-anywhere.herokuapp.com/https://'+ serverName +'.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + summonerName)
            .then(response => {
                this.setState({
                    summonerProfile: response.data
                }, () => {
                    this.getMatchList();
                });
            });
    };

    render() {
        let summonerProfileDetails;
        if (this.state.summonerProfile) {
            summonerProfileDetails = <p>account id: {this.state.summonerProfile.accountId}\n
            profile icon id: {this.state.summonerProfile.profileIconId}</p>
        }
        return (
            <Aux>
                <SearchBar searchBarClick={this.searchBarClickHandler} />
                {summonerProfileDetails}
                {/* {this.state.matchListData ? 
                    <MatchCards matchListData={this.state.matchListData} /> : null} */}
                <MatchCards matchListData={this.state.matchListData} />
                
            </Aux>
        );
    }
}

export default SummonerDetails;