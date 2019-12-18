# Saiku Remove Support [![Build Status](https://travis-ci.org/brenopolanski/saiku-remove-support.svg?branch=master)](https://travis-ci.org/brenopolanski/saiku-remove-support)

<img src="https://raw.githubusercontent.com/brenopolanski/saiku-remove-support/gh-assets/logo.png" alt="Saiku UI Plugin Boilerplate" align="right" />

### Remove Saiku Support Label

[Saiku](http://www.meteorite.bi/saiku) is an open source analytics client developed by [Meteorite BI](http://www.meteorite.bi/). A user interface for the analytical tool.

## Usage

1. Include **RemoveSupport** folder in:

	
  ```
  ├── saiku-ui/
  │   └── js/
  │       └── saiku/
  │           └── plugins/
  │               └── RemoveSupport/
  │                   └── plugin.js
  ```

2. Edit the file saiku-ui/index.html, insert the code below:

	```html
	<script type="text/javascript" src="js/saiku/plugins/RemoveSupport/plugin.js" defer></script>
	```
	> look for ***Saiku plugins*** comment in index.html.
	
## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m "Add some feature"`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request  :)

English is the universal language nowadays, so please don't create or comment on issues using another language.
	
## History

For detailed changelog, check [Releases](https://github.com/brenopolanski/saiku-remove-support/releases).

## Credits

I gratefully acknowledge the following open source project:

* [Saiku UI](https://github.com/OSBI/saiku-ui) - A user interface for the Saiku analytical tool (Apache license version 2).

## License

[MIT License](https://brenopolanski.mit-license.org/) © Breno Polanski
