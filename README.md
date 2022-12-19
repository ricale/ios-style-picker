# iOS Style Picker

![sample](docs/sample.jpeg)

[Demo](https://ricale.kr/ios-style-picker)

## 1. Install

```
$ yarn add ios-style-picker
```

## 2. Usage

```tsx
import { DatePicker } from 'ios-style-picker';
import 'ios-style-picker/dist/style.css';

function SomeComp(/* ... */) {
  // ...
  return (
    <div>
      {/* ... */}
      <DatePicker
        fromDate={fromDate}
        toDate={toDate}
        initDate={initDate}
        onChange={(y, m, d) => {
          console.log(y, m, d);
        }}
      />
    </div>
  );
}
```

### 2.1. Props

```ts
export type DatePickerProps = {
  onChange: (year: number, month: number, day: number) => void;
  fromDate?: Date;
  toDate?: Date;
  initDate?: Date;
  infinite?: boolean;
  className?: string;
};
```

### 2.2. Class Names

```
div.ios-style-date-picker
  div
    div.ios-style-picker
      ul.ios-style-picker__option-list
        li.ios-style-picker__option-item
      div.ios-style-picker__highlight
        ul.ios-style-picker__highlight-list
          li.ios-style-picker__highlight-item
```

## 3. Reference

It's forked from [this gist](https://gist.github.com/wjpeters/876a8fe4040a2bb4b4eb28d2270620a5)
