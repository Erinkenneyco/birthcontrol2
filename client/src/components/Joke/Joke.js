import React, { Component } from "react"
import "./Joke.scss";

class Joke extends Component {

    state = {
        loggedIn: false,
        facts: ""
      };

      componentDidMount() {
        this.newFact();
      }
    // Array of interesting sex facts.
    
  
     newFact = () => {
        const factsArray= [
            "According to Live Science, by the age of 19, a whopping 71 percent of American teenagers have already had sex." ,
            "Think food is sexy? Some people admit to feeling a similar sense of arousal when thinking about food as they do when thinking about sex." ,
            "According to a study published in the Journal of Sex Research, a person’s pain threshold significantly increases during arousal." ,
            "Sex counts as a workout! During 30 minutes of active sex, you burn about 200 calories. " ,
            "Orgasms are good for your health! They can lower a woman’s risk of heart disease, stroke, breast cancer and even depression. So have sex and get happy!" ,
            "The vibrator was originally invented in the 19th century as a way to reduce “hysteria.” That seems a little extreme. However, we do not recommend testing that theory by taking away a woman’s vibrator to see if she goes into a hysterical fit. That’s just dangerous." ,
            "Your average healthy man produces approximately 300 million sperm in just a teaspoon of his semen. However, it only takes one little swimmer to fertilize a woman’s egg and it can live for up to a week inside your body." ,
            "Even though the male O seems to get all the attention, it turns out the women get the last laugh when it comes to climaxing. The average female orgasm lasts 20 seconds — 14 seconds longer than the male’s six-second O." ,
            "Ever notice that it’s kind of tough to go pee right after sex? Your body releases an antidiuretic hormone when you orgasm, which prohibits you from going potty as easily as usual. Just don’t hold it for too long, or you could risk infection." ,
            "According to a study from the University of Groningen in the Netherlands, the amygdala — the part of the brain involved in fear and anxiety — shuts down during a female orgasm. So that brain mush you experience during sex is legit!" 
          ];
        var randomNumber = Math.floor(Math.random() * (factsArray.length));
        this.setState ({facts: factsArray[randomNumber]})
      }



 render () {
    return (
        <div className="jokeBox">
        <div id = "factsDisplay"></div>
        <p>{ this.state.facts }</p>
        </div>
    )
}
}

export default Joke;