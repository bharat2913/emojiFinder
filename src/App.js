import React, { useState } from "react";
import "./styles.css";

// var username = prompt("Enter Username");

// var shoppingList = ["Bread", "eggs", "flower", "wood"];
var emojiDictionary = {
  "π": "smiling",
  "π³": "disbelief",
  "π": "sad",
  "π₯‘": "takeout box",
  "β€οΈ": "love",
  "π": "annoyance",
  "π": "Grinning Face",
  "π": "Grinning Face with Big Eyes",
  "π": "Grinning Face with Smiling Eyes",
  "π": "Beaming Face with Smiling Eyes",
  "π": "Grinning Squinting Face",
  "π": "Grinning Face with Sweat",
  "π€£": "Rolling on the Floor Laughing",
  "π": "Face with Tears of Joy",
  "π": "Slightly Smiling Face",
  "π": "Upside-Down Face",
  "π": "Winking Face",
  "π": "Smiling Face with Halo",
  "π₯°": "Smiling Face with Hearts",
  "π": "Smiling Face with Heart-Eyes",
  "π€©": "Star-Struck",
  "π": "Face Blowing a Kiss",
  "π": "Kissing Face",
  "βΊοΈ": "Smiling Face",
  "π": "Kissing Face with Closed Eyes",
  "π": "Kissing Face with Smiling Eyes"
};
var emojiweknow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaningInput] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we do not have this in our database";
    }

    setMeaningInput(meaning);

    // console.log(event.target.value)
  }

  // function getBG(index) {
  //   if (index % 2 === 0) {
  //     return "white";
  //   }
  //   return "grey";
  // }

  // function listClickItenHandler(item) {
  //   console.log("Clicked", item);
  // }
  function emojiClickHandler(emoji) {
    // processing
    var meaning = emojiDictionary[emoji];
    setMeaningInput(meaning); // react call to show output


  }

  return (
    <div className="App">
      <h1>Emoji Detect</h1>

      {emojiweknow.map(function (emoji) {
        return (
          <div
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem", 
              padding: "1rem", 
              cursor: "pointer",
              display: "ruby-base" 
            }}
            key={emoji}
          >
            {emoji}
          </div>
        );
      })}

      <input
        placeholder="Click or Enter one of these emojis to get meaning "
        onChange={emojiInputHandler}
      ></input>

      <div> {meaning}</div>

      {/* <ul>
        {shoppingList.map(function (item, index) {
          return (
            <li
              key={item}
              onClick={() => listClickItenHandler(item)}
              style={{ backgroundColor: getBG(index) }}
            >
              {item}
            </li>
          );
        })}
      </ul> */}
    </div>
  );
}
