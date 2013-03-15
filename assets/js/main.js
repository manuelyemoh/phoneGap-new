 var jQT = new $.jQTouch({
                icon: 'jqtouch.png',
                addGlossToIcon: false,
                startupScreen: 'jqt_startup.png',
                statusBar: 'black',
            });

            $(function(){
                jQT.addAnimation({
                    name: 'reveal',
                    selector: '.revealme'
                });
            });