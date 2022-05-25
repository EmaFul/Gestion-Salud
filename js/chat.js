$(document).on("click", '.submit', function(event) {
    var to_user_id = $(this).attr('id');
    to_user_id = to_user_id.replace(/chatButton/g, "");
    sendMessage(to_user_id);
    });

function updateUserChat() {
$('li.contact.active').each(function(){
var to_user_id = $(this).attr('data-touserid');
$.ajax({
url:"chat_action.php",
method:"POST",
data:{to_user_id:to_user_id, action:'update_user_chat'},
dataType: "json",
success:function(response){
$('#conversation').html(response.conversation);
}
});
});
}

function updateUnreadMessageCount() {
    $('li.contact').each(function(){
    if(!$(this).hasClass('active')) {
    var to_user_id = $(this).attr('data-touserid');
    $.ajax({
    url:"chat_action.php",
    method:"POST",
    data:{to_user_id:to_user_id, action:'update_unread_message'},
    dataType: "json",
    success:function(response){
    if(response.count) {
    $('#unread_'+to_user_id).html(response.count);
    }
    }
    });
    }
    });
$(document).on('focus', '.message-input', function(){
        var is_type = 'yes';
        $.ajax({
        url:"chat_action.php",
        method:"POST",
        data:{is_type:is_type, action:'update_typing_status'},
        success:function(){
        }
        });
        });
    <?php
        session_start();
        include ('Chat.php');
        $chat = new Chat();
        $chat->updateUserOnline($_SESSION['userid'], 0);
        $_SESSION['username'] = "";
        $_SESSION['userid'] = "";
        $_SESSION['login_details_id']= "";
        header("Location:index.php");
    ?>
