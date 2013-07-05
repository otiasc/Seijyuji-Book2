/*###########################################################

	Descripción
	-Utilidades de Rol Platform

###########################################################*/


/*========================================================
	FUNCIÓN
	setForumId
	------------------------------------------------------
	Añade a las clases .forum un atributo id #f seguido
	de la id del foro correspondiente
========================================================*/
function setForumId() {
	$('.forum').each(function(index, element) {
		var url = $(this).find('.url-forum').attr('href');
		var id = url.slice(1, url.indexOf('-'));
		$(this).attr('id', id);
    });
};



/*========================================================
	FUNCIÓN
	setTopicId
	------------------------------------------------------
	Añade a las clases .topic un atributo id #t seguido
	de la id del post correspondiente
========================================================*/
function setTopicId() {
	$('.topic').each(function(index, element) {
		var url = $(this).find('.url-topic').attr('href');
		var id = url.slice(1, url.indexOf('-'));
		$(this).attr('id', id);
    });
};



/*========================================================
	FUNCIÓN
	setPostId
	------------------------------------------------------
	Añade a las clases .post un atributo id #p seguido
	de la id del post correspondiente
========================================================*/
function setPostId() {
	$('.post').each(function(index, element) {
		var url = $(this).find('.url-post').attr('href');
		var id = url.slice(url.indexOf('#')+1);
		$(this).attr('id', 'p' + id);
    });
};
