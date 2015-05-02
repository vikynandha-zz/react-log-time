# react-datetime

React component to render a time in the `x minutes ago` format and show a tooltip on hover, with full date and time.

## Usage
```jsx
<LogTime value={new Date}>
```

`value` can be any valid `Date` object or string that [`moment`](http://momentjs.com/) takes.

Any other property will be copied over to the DOM node as attributes.

Example:
```jsx
<LogTime value={new Date} className="text-muted">
```
