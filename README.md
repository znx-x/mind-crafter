# MindCrafter

MindCrafter is an open-source, advanced AI tool that can be utilized to create AI-to-AI interactions, advanced simulations, and more. It leverages the GPT API and is compatible with GPT 3.5 and GPT 4. **To use this application, you will need your own GPT API keys**.

## ⚠️ Disclaimer

This application is currently in the **alpha** stage of development, meaning some functions may not work as expected or could be entirely absent. Moreover, extensive code changes might occur between versions. This software is provided on an 'as is' basis. Use it at your own risk.

## License

This software is distributed under GNU General Public License v3.0. Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.

## Installing

First, clone the repository:

```shell
git clone https://github.com/znx-x/mind-crafter && cd mind-crafter
```

Install all dependencies using npm:

```shell
npm install
```

Now, copy .env.EXAMPLE to .env and edit the file, inputting your own parameters and API keys.

```shell
mv .env.EXAMPLE .env
```

Your application should now be ready to run.

## Running a Development Environment

You can run your development environment with the following command:

```shell
npm start
```

Ensure your .env file is properly set up.

## Building & Deploying

Build the application using:

```shell
npm build
```
