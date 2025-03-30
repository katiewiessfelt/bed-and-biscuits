NODE_VERSION = 18
BUILD_DIR = build

less:
	lessc src/components/App.less src/components/App.css
	lessc src/components/Home/Home.less src/components/Home/Home.css
	lessc src/components/Header/Header.less src/components/Header/Header.css
	lessc src/components/Footer/Footer.less src/components/Footer/Footer.css
	lessc src/components/Hero/Hero.less src/components/Hero/Hero.css
	lessc src/components/About/About.less src/components/About/About.css
	lessc src/components/Bakery/Bakery.less src/components/Bakery/Bakery.css
	lessc src/components/Boarding/Boarding.less src/components/Boarding/Boarding.css
	lessc src/components/Members/Members.less src/components/Members/Members.css
	lessc src/components/Menu/Menu.less src/components/Menu/Menu.css