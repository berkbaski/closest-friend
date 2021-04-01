# closest-friend
Not need anything (of course like your closest friend)

[👋🏼 2 owner](https://berkbaski.com)

# Usage

## find value in default array
````js
import { findClosestInArray } from 'closest-friend'

const array = [5, 10, 20]
const closest = findClosestInArray(7, array)
// closest value is 5
````

## find value in matrix array
````js
import { findClosestInMatrix } from 'closest-friend'

const array = [[1, 2], [4, 5], [100, 959]]
const closest = findClosestInMatrix([1, 3], array)
// closest value is [1, 2]
````

## find value in mu-multi element matrix array
````js
import { findClosestInMatrix } from 'closest-friend'

const array = [[1, 5, 9, 10], [5, 6, 7, 9], [9, 4, 5, 7]]
const closest = findClosestInMatrix([1, 6, 10, 11], array)
// closest value is [1, 5, 9, 10]
````

# Contribution
If you choose to make a contribution,
- open an issue or
- fork this repository, work on a feature and submit a pull request.
