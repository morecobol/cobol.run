# cobol.run

[![Docker Repository][docker-image]][docker-url]
[![Build status][ci-image]][ci-url]
[![Follow @morecobol on Twitter][twitter-image]][twitter-url]

Run serverless COBOL programs on [OpenWhisk](https://www.ibm.com/cloud-computing/bluemix/openwhisk). Built with [Trails.js](https://trailsjs.io) and Node.

## Usage

The user sends a `POST` request containing COBOL source code, and receives as a response the result of the execution of the program.

### Example

- Request: `POST /compileAndRun`
  ```json
  {
    "sources": [
      {
        "fd": "main.cob",
        "data": "identification division. program-id. hello. procedure division. display \"hello world\"."
      }
    ]
  }
  ```
- Response:
  ```json
  {
    "code": 0,
    "output": "hello world"
  }
  ```

## API

### `POST` payload

|:---|:---|:---|:---|
| **field** | **type** | **description** | **required** |
| `sources` | `Array (File)` | List of sources to compile and run | yes |
| `files` | `Array (File)` | List of files required by the cobol program | no |
| `args` | `Array (String)` | List of arguments to pass into the cobol program at runtime | no |
| `flags` | `Array (String)` | List of custom [gnucobol](https://sourceforge.net/projects/open-cobol/) compiler flags | no |

#### `File`

The `sources` and `files` arrays contain `File` objects.

|:---|:---|:---|:---|
| **field** | **type** | **description** | **required** |
| `fd` | `String` | Name of the file | yes |
| `data` | `String` | Contents of the file | yes |

## License
MIT

## Maintained By
[<img src='http://cdn.langa.io/art/logos/logomain.svg' height='64px'>](http://langa.io)

[docker-image]: https://img.shields.io/badge/Docker-cobol.run-1aaaf8.svg?style=flat-square
[docker-url]: https://hub.docker.com/r/morecobol/cobol.run/
[ci-image]: https://img.shields.io/travis/morecobol/cobol.run.svg?style=flat-square&label=Linux%20/%20OSX
[ci-url]: https://travis-ci.org/morecobol/cobol.run
[twitter-image]: https://img.shields.io/twitter/follow/morecobol.svg?style=social
[twitter-url]: https://twitter.com/morecobol
