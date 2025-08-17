
def print_board(board):
    print()
    print(f" {board[0] or ' '} | {board[1] or ' '} | {board[2] or ' '} ")
    print("---+---+---")
    print(f" {board[3] or ' '} | {board[4] or ' '} | {board[5] or ' '} ")
    print("---+---+---")
    print(f" {board[6] or ' '} | {board[7] or ' '} | {board[8] or ' '} ")
    print()


def check_win(board,player):
    if (board[0]==player and board[1]==player and board[2]==player)or(board[3]==player and board[4] == player and board[5]==player) or(board[6]==player and board[7] == player and board[8]==player) or   (board[0]==player and board[3] == player and board[6]==player) or   (board[1]==player and board[4] == player and board[7]==player) or  (board[2]==player and board[5] == player and board[8]==player) or(board[0]==player and board[4] == player and board[8]==player) or(board[2]==player and board[4] == player and board[6]==player):
        return True
    
    else: 
        return False
def play_game():
    board=['']*9
    player = 'X'
    game_over= False
    print("Welcome to Tic Tac Toe!")
    print_board(board)

    while not game_over:
        print(f"It's {player}'s turn.")
        position=int(input("Enter a position(1-9):"))-1
        if board[position]=='':
            board[position]=player
        else:
            print("That postion is already taken. Try again...")
            continue
        print_board(board)
        
        if check_win(board,player):
            print(f"{player}wins!")
            game_over=True
        elif ''not in board:
            print("It's a tie!")
            game_over=True
        else:
            player= 'O' if player=='X' else 'X'

if __name__ == '__main__':
    play_game()