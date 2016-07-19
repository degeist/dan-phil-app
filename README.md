# Book Cover Generator app
=============================

A tool to generate user-generated book covers.


## Setting up

### Frontend
To compile SASS in an easy way install Gulp + NodeJS.

Run:

```shell
npm install
```

Now all files in ```_scss``` are watched and the ```_scss/main.scss``` compiles to ```bcg/static/css/main.css``` on save.


### Backend

1. Download and install Python 3.5.2 from [python.org](https://www.python.org/downloads/)
2. Download and install `virtualenv` to create a virtual environment ([docs](https://virtualenv.pypa.io/en/stable/installation/))
3. Create a virtual environment:

```shell
virtualenv -p python3 .venv
```

4. Activate newly created virtual environment:

```shell
source .venv/bin/activate
```

5. Install Python requirements:

```shell
pip install -r requirements.txt
```
