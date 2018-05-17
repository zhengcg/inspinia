$(document).on("click",".uploadRemove",function(){
	$(this).siblings(".uploader-list").empty();
	$(this).siblings("input[type=hidden]").val("")
})
$(".filePicker").click(function(){
	$(".filePicker").removeAttr("id");
      $(this).addAttr("id","banners");
      $(".uploader-box").removeClass("uploadCur")
      $(this).parent(".uploader-box").addClass("uploadCur")
})

	var uploader =WebUploader.create({

			    // 选完文件后，是否自动上传。
			    auto: true,

			    // swf文件路径
			    swf: BASE_URL + '/js/Uploader.swf',

			    // 文件接收服务端。
			    server: 'http://webuploader.duapp.com/server/fileupload.php',

			    // 选择文件的按钮。可选。
			    // 内部根据当前运行是创建，可能是input元素，也可能是flash.
			    pick: '#banners',

			    // 只允许选择图片文件。
			    accept: {
			        title: 'Images',
			        extensions: 'gif,jpg,jpeg,bmp,png',
			        mimeTypes: 'image/*'
			    }
			})
	uploader.addButton({
      id: '#banners'
    });
		uploader.on( 'fileQueued', function( file ) {
		    var $li = $(
		            '<div id="' + file.id + '" class="file-item thumbnail pull-left">' +
		                '<img>' +
		                '<div class="info text-center">' + file.name + '</div>' +
		            '</div>'
		            ),
		        $img = $li.find('img');


		    // $list为容器jQuery实例
		    $(".uploadCur").find(".uploader-list").append( $li );
		    // 创建缩略图
		    // 如果为非图片文件，可以不用调用此方法。
		    // thumbnailWidth x thumbnailHeight 为 100 x 100
		    uploader.makeThumb( file, function( error, src ) {
		        if ( error ) {
		            $img.replaceWith('<span>不能预览</span>');
		            return;
		        }

		        $img.attr( 'src', src );
		    }, 80, 80 );
		});

		// 文件上传成功，给item添加成功class, 用样式标记上传成功。
		uploader.on( 'uploadSuccess', function( file,res) {
		    $(".uploadCur").find("input[type=hidden]").val(res.url);
		});




		
$(".mulFilePicker").click(function(){
	$(".mulFilePicker").removeAttr("id");
      $(this).addAttr("id","mulBanners");
      $(".mulUploader-box").removeClass("mulUploadCur")
      $(this).parent(".mulUploader-box").addClass("mulUploadCur")
})
var mulUploader =WebUploader.create({
			    auto: true,
			    swf: BASE_URL + '/js/Uploader.swf',
			    server: 'http://webuploader.duapp.com/server/fileupload.php',
			    pick: '.mulFilePicker',
			    accept: {
			        title: 'Images',
			        extensions: 'gif,jpg,jpeg,bmp,png',
			        mimeTypes: 'image/*'
			    }
			})
	mulUploader.addButton({
      id: '#mulBanners'
    });
		mulUploader.on( 'fileQueued', function( file ) {
		    var $li = $(
		            '<div id="' + file.id + '" class="file-item thumbnail pull-left">' +
		                '<img>' +
		                '<div class="info text-center">' + file.name + '</div>' +
		            '</div>'
		            ),
		        $img = $li.find('img');


		    // $list为容器jQuery实例
		    $(".mulUploadCur").find(".uploader-list").append( $li );
		    // 创建缩略图
		    // 如果为非图片文件，可以不用调用此方法。
		    // thumbnailWidth x thumbnailHeight 为 100 x 100
		    mulUploader.makeThumb( file, function( error, src ) {
		        if ( error ) {
		            $img.replaceWith('<span>不能预览</span>');
		            return;
		        }

		        $img.attr( 'src', src );
		    }, 80, 80 );
		});

		// 文件上传成功，给item添加成功class, 用样式标记上传成功。
		mulUploader.on( 'uploadSuccess', function( file,res) {
			var val=$(".uploadCur").find("input[type=hidden]").val()
			val+=res.body.url
		    $(".uploadCur").find("input[type=hidden]").val(val);
		});

