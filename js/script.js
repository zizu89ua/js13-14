$(function(){
	
	var myBlock = $("#my-block__script").html();
	var blockQuestion = [
		{
			question: 'Вопрос №1',
			answer: [
				'Ответ 1',
				'Ответ 2',
				'Ответ 3'
			],
			correct: 1,
		},
		{
			question: 'Вопрос №2',
			answer: [
				'Ответ 4',
				'Ответ 5',
				'Ответ 6'
			],
			correct: 1,
		},
		{
			question: 'Вопрос №3',
			answer: [
				'Ответ 7',
				'Ответ 8',
				'Ответ 9'
			],
			correct: 1,
		}
	
	];


	var quest = tmpl(myBlock, { 
		data: blockQuestion
	 });
	 
	$('.script-block').append(quest);

	$('#check-result').on('click', function () {

			var check = $("input:radio:checked");

			for (var i = 0; i < check.length; i++ ){
            
   			console.log(check.val());

		}



    })

    // blockQuestion.question[0].answer[blockQuestion.question[0].correct]
});