
/*class IPL_Team{
    static Welcome(){
        console.log("Welcome to TATA IPL 2026")
    }
    constructor(Team_name,Match_Played,Wins,Loses,Points){
        this.Team_name = Team_name
        this.Match_Played = Match_Played
        this.Wins = Wins
        this.Loses = Loses
        this.Points = Points
    }

    Display_Teams(){
        console.log(`Team:${this.Team_name} M:${this.Match_Played} W:${this.Wins} L:${this.Loses} Pts:${this.Points} Win%:${this.Win_Percentage().toFixed(1)} Q:${this.Qualifiers()}`)
    }

    Win_Percentage(){
       let  percentage = (this.Wins/this.Match_Played) * 100
    return percentage
    }
// the Qualifiers will decide based on points and NRR.But i filtered manually due to lack of data.i'll update this as soo as possible.
    Qualifiers(){
        return this.Points >= 16;
    }

    set Team_name(New_Team_name){
        if(typeof New_Team_name === "string" && New_Team_name.length > 0){
            this._Team_name = New_Team_name
        }else{
            console.error(`Team name must be non-empty string`)
        }
    }

    set Match_Played(newMatch_Played){
        if(newMatch_Played > 0){
            this._Match_Played = newMatch_Played
        } else {
            console.error(`Match Count Must be Positive value`)
        }
    }

    set Wins(NewWins){
        if(NewWins >= 0 ){
            this._Wins = NewWins
        } else {
            console.error(`Wins Count must be Positive value`)
        }
    }

    set Loses(NewLoses){
        if(NewLoses >= 0){
            this._Loses = NewLoses
        } else{
            console.log(`Loses Count must be positive value`)
        }
    }

    set Points(NewPoints){
        if(NewPoints >= 0){
            this._Points = NewPoints
        }else{
            console.error(`Points Count Must be positive value`)
        }
    }

    get Team_name(){
        return this._Team_name;
    }

    get Match_Played(){
        return this._Match_Played;
    }

    get Wins(){
        return this._Wins;
    }

    get Loses(){
        return this._Loses;
    }

    get Points(){
        return this._Points;
    }
}

const Team1 = new IPL_Team("RCB",14,9,5,18)
const Team2 = new IPL_Team("GT",14,9,5,18)
const Team3 = new IPL_Team("SRH",14,9,5,18)
const Team4 = new IPL_Team("RR",14,8,6,16)
const Team5 = new IPL_Team("PBKS",14,7,6,15)
const Team6 = new IPL_Team("DC",14,7,7,14)
const Team7 = new IPL_Team("KKR",14,6,7,13)
const Team8 = new IPL_Team("CSK",14,6,8,12)
const Team9 = new IPL_Team("MI",14,4,10,8)
const Team10 = new IPL_Team("LSG",14,4,10,8)

IPL_Team.Welcome()

let teams = [Team1,Team2,Team3,Team4,Team5,Team6,Team7,Team8,Team9,Team10]
for (const team of teams){
    team.Display_Teams()
    team.Win_Percentage()
}

*/

const Players =[{name : "Virat",Age : 37},
                {name : "Beth Hell", Age : 22},
                {name : "Padikal", Age : 26},
                {name : "Phil Salt", Age : 29},
                {name : "Patidhar", Age : 32},
                {name : "Bhuvi", Age : 37},
                {name : "Hazelhood", Age : 35}]

Players.push({name:"Jocob Duffy",Age:34})

Players.sort((a,b) => a.name.localeCompare(b.name))

console.log(Players)