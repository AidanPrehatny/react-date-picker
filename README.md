![build](https://img.shields.io/travis/wojtekmaj/react-date-picker.svg) ![dependencies](https://img.shields.io/david/wojtekmaj/react-date-picker.svg
) ![dev dependencies](https://img.shields.io/david/dev/wojtekmaj/react-date-picker.svg
) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

# React-Date-Picker
An input component for picking dates for your React application.

## tl;dr
* Install by executing `npm install {PACKAGE_NAME_GOES_HERE}` or `yarn add {PACKAGE_NAME_GOES_HERE}`.
* Import by adding `import DatePicker from '{PACKAGE_NAME_GOES_HERE}'`.
* Import styles by adding `import '{PACKAGE_NAME_GOES_HERE}/build/DatePicker.less'` or style the calendar on your own.
* Use by adding `<DatePicker />`. Use `onChange` prop for getting new values.

## Demo

Minimal demo page is included in sample directory.

[Online demo](http://projekty.wojtekmaj.pl/react-date-picker/) is also available!

## Getting started

### Compatibility

React-Calendar, on which React-Date-Picker relies heavily, uses modern web technologies. That's why it's so fast, lightweight and easy to style. This, however, comes at a cost of supporting only modern browsers.

|Browser|Minimum supported version|
|----|----|
|Google Chrome|24|
|Mozilla Firefox|29|
|Microsoft Edge|12|
|Apple Safari|10|
|Apple Safari (iOS)|10.2|
|Opera|15|
|Internet Explorer|11|
|Samsung Internet|4|


### Installation

Add React-Date-Picker to your project by executing `npm install {PACKAGE_NAME_GOES_HERE}` or `yarn add {PACKAGE_NAME_GOES_HERE}`.

### Usage

Here's an example of basic usage:

```js
import React, { Component } from 'react';
import DatePicker from '{PACKAGE_NAME_GOES_HERE}';

class MyApp extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div>
        <DatePicker
          onChange={this.onChange}
        />
      </div>
    );
  }
}
```

## User guide

### DatePicker

Displays an input field complete with custom inputs, native input, and a calendar.

#### Props

|Prop name|Description|Example values|
|----|----|----|
|calendarType|Defines which type of calendar should be used. Can be "US" or "ISO 8601". Defaults to "US" for "en-US" locale, "ISO 8601" to all the others.|`"ISO 8601"`|
|isOpen|Defined whether the calendar should be opened. Defaults to false.|`true`|
|locale|Defines which locale should be used by the calendar. Can be any BCP 47 language tag. Defaults to user's browser settings.|`"hu-HU"`|
|maxDate|Defines maximum date that the user can select. Periods partially overlapped by maxDate will also be selectable, although react-date-picker will ensure that no later date is selected.|Date: `new Date()`|
|maxDetail|Defines the most detailed view that the user shall see. View defined here also becomes the one on which clicking an item will select a date and pass it to onChange. Can be "month", "year", "decade" or "century". Defaults to "month".|`"month"`|
|minDate|Defines minimum date that the user can select. Periods partially overlapped by minDate will also be selectable, although react-date-picker will ensure that no earlier date is selected.|Date: `new Date()`|
|minDetail|Defines the least detailed view that the user shall see. Can be "month", "year", "decade" or "century". Defaults to "century".|`"century"`|
|nextLabel|Defines the content of the "next" button on the navigation pane. Defaults to "›".|<ul><li>String: `"›"`</li><li>React element: `<NextIcon />`</li></ul>|
|next2Label|Defines the content of the "next on higher level" button on the navigation pane. Defaults to "»". |<ul><li>String: `"»"`</li><li>React element: `<DoubleNextIcon />`</li></ul>|
|onChange|Function called when the user clicks an item on the most detailed view available.|`(value) => alert('New date is: ', value)`|
|onClickDay|Function called when the user clicks a day on a calendar.|`(value) => alert('Clicked day: ', value)`|
|onClickDecade|Function called when the user clicks a decade on a calendar.|`(value) => alert('Clicked decade: ', value)`|
|onClickMonth|Function called when the user clicks a month on a calendar.|`(value) => alert('Clicked month: ', value)`|
|onClickYear|Function called when the user clicks a year on a calendar.|`(value) => alert('Clicked year: ', value)`|
|prevLabel|Defines the content of the "previous" button on the navigation pane. Defaults to "‹".|<ul><li>String: `"‹"`</li><li>React element: `<PrevousIcon />`</li></ul>|
|prev2Label|Defines the content of the "previous on higher level" button on the navigation pane. Defaults to "«".|<ul><li>String: `"«"`</li><li>React element: `<DoublePreviousIcon />`</li></ul>|
|returnValue|Defines which dates shall be passed by the calendar to the onChange function and onClick{Period} functions. Can be "start" or "end". Defaults to "start".|`"end"`|
|showNeighboringMonth|Defines whether days from previous or next month shall be rendered if the month doesn't start on the first day of the week or doesn't end on the last day of the week, respectively. Defaults to true.|`false`|
|showWeekNumbers|Defines whether week numbers shall be shown at the left of MonthView or not. Defaults to false.|`true`|
|value|Defines the value of the input.|<ul><li>Date: `new Date()`</li><li>An array of dates: `[new Date(2017, 0, 1), new Date(2017, 7, 1)]`|
|view|Determines which calendar view shall be opened initially. Does not disable navigation. Can be "month", "year", "decade" or "century". Defaults to the most detailed view allowed.|`"year"`|

## License

The MIT License.

## Author

<table>
  <tr>
    <td>
      <img src="https://github.com/wojtekmaj.png?s=100" width="100">
    </td>
    <td>
      Wojciech Maj<br />
      <a href="mailto:kontakt@wojtekmaj.pl">kontakt@wojtekmaj.pl</a><br />
      <a href="http://wojtekmaj.pl">http://wojtekmaj.pl</a>
    </td>
  </tr>
</table>
