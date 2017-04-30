# <img src="http://cdn.langa.io/cobol.run/morecobol-icon-square.png" height="48px"> cobol.run

[![Docker Repository][docker-image]][docker-url]
[![Build status][ci-image]][ci-url]
[![Follow @morecobol on Twitter][twitter-image]][twitter-url]

Run serverless COBOL programs on [OpenWhisk](https://www.ibm.com/cloud-computing/bluemix/openwhisk). Built with [Trails.js](https://trailsjs.io) and Node.

## Usage

The user sends a `POST` request containing COBOL source code, and receives as a response the result of the execution of the program.

<img src="http://cdn.langa.io/cobol.run/cobol-run-intro-video.png" width="640px">

### Example

- Request: `POST /compileAndRun`
  ```json
  {
    "options": {
      "dialect": "cobol2014"
    },
    "source": "identification division. program-id. hello. procedure division. display \"hello world\"."
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

| **field** | **type** | **description** | **required** |
|:---|:---|:---|:---|
| `source` | `String` | the COBOL source to compile and run | yes |
| `files` | `Array (File)` | List of files required by the cobol program | no |
| `args` | `Array (String)` | List of arguments to pass into the cobol program at runtime | no |
| `options` | `Object` | List of custom [gnucobol](https://sourceforge.net/projects/open-cobol/) compiler flags | no |

#### `File`

The `files` array contains `File` objects.

| **field** | **type** | **description** | **required** |
|:---|:---|:---|:---|
| `name` | `String` | Name of the file | yes |
| `data` | `String` | Contents of the file | yes |

#### `options.dialect`

Supported COBOL dialects

| **dialect** | **description** |
|:---|:---|
| `cobol2014` | Cobol 2014 Dialect |
| `cobol2002` | Cobol 2002 Dialect |
| `cobol85` | Cobol 85 Dialect |
| `ibm` | IBM Dialect |
| `mvs` | MVS Dialect |
| `bs2000` | BS2000 Dialect |
| `mf` | MicroFocus Dialect |
| `acu` | ACUCOBOL Dialect |

## Resources
- [COBOL: Up and Running in 3 minutes](https://www.youtube.com/watch?v=3lx9ZeP47Hg)
- [COBOL: Parsing Copybook Files into JSON](https://www.youtube.com/watch?v=RTqMMWOyvuU)
- [Serverless COBOL on the Cloud: Introduction to cobol.run](https://www.youtube.com/watch?v=Wn2tE4VVYYQ)
- [COBOL Programs as Functions: How The cobol.run Cloud FaaS Works, Part 1](https://www.youtube.com/watch?v=rsezV9vcXek)

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
