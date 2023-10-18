
            var images = [
                { src: 'img/1.jpg', title: 'questions Kelen' },                
                { src: 'img/2.jpg', title: 'questions Fila' },
                { src: 'img/3.png', title: 'questions Saba' },
                { src: 'img/4.png', title: 'questions Naani' },
                { src: 'img/5.png', title: 'questions Duru' },
                { src: 'img/6.jpg', title: 'questions woro' },
                { src: 'img/7.jpg', title: 'questions wolowula' },
                { src: 'img/8.jpg', title: 'questions segin' }
            ];

            $(function () {
                var gridSize = $('#levelPanel :radio:checked').val();
                imagePuzzle.startGame(images, gridSize);
                $('#newPhoto').click(function () {
                    var gridSize = $('#levelPanel :radio:checked').val();
                    imagePuzzle.startGame(images, gridSize);
                });

                $('#levelPanel :radio').change(function (e) {
                    var gridSize = $(this).val();
                    imagePuzzle.startGame(images, gridSize);
                });
            });
            function rules() {
                alert('Rearrange the pieces so that you get a sample image. \nThe steps taken are counted');
            }

            