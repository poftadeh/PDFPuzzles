var puzzles = [{
        "Level": "Pawn",
        "Module": "Pawn Moves",
        "FEN": "8/8/8/5p1p/6P1/2P1p3/P3P3/8 w - -",
        "Question": "Let's start with something simple. Circle all the squares each white pawn can move to. Pay attention to the captures as well as the open squares.",
        "Answer": "a3, a4, c4, f5, g5, h5"
    },
    {
        "Level": "Pawn",
        "Module": "Pawn Moves",
        "FEN": "8/pp2p3/1p2Pp2/8/8/6p1/6P1/8 w - -",
        "Question": "Now circle the squares each black pawn can move to. Keep the same principles as the previous question in mind.",
        "Answer": "a6, a5, b5, f5"
    },
    {
        "Level": "Pawn",
        "Module": "Pawn Moves",
        "FEN": "8/8/1pp4p/1pP4P/1P3p2/p3pPp1/P3P1P1/8 w - -",
        "Question": "Only one of our white pawns can move in this position, but which one? Circle it.",
        "Answer": "c5"
    },
    {
        "Level": "Pawn",
        "Module": "Pawn Moves",
        "FEN": "8/8/8/8/8/3P4/3P4/8 w - -",
        "Question": "What is it called when two pawns are stacked in the rank like this?  This is an important concept as we will see later.",
        "Answer": "Doubled pawns."
    },
    {
        "Level": "Pawn",
        "Module": "Pawn Moves",
        "FEN": "8/8/8/8/8/7P/P7/8 w - -",
        "Question": "Let's imagine that these two pawns are having race. Who can get to the end faster? Circle the Answer:  (Left Pawn/Right Pawn/It's a tie.)",
        "Answer": "Tie."
    },
    {
        "Level": "Pawn",
        "Module": "Pawn Moves",
        "FEN": "8/p7/1p5p/6p1/5p2/6p1/7P/8 w - -",
        "Question": "Our white pawn needs to travel to the other end of the board. How does it get there? Draw a path showing its journey.",
        "Answer": "axg3, bxf4, fxg5, gxh6, h7, h8"
    },
    {
        "Level": "Pawn",
        "Module": "Rook Moves",
        "FEN": "8/8/3P4/p2R2P1/8/P7/8/8 w - -",
        "Question": "Let's test some rook basics: circle all the squares this rook can move to.",
        "Answer": "a5,b5,c5,e5,f5,d4,d3,d2,d1"
    },
    {
        "Level": "Pawn",
        "Module": "Rook Moves",
        "FEN": "7R/8/8/3r4/8/8/8/8 w - -",
        "Question": "Which rook has more squares it can travel to? Circle the answer: (White Rook/ Black Rook/Both the same)",
        "Answer": "Both the same"
    },
    {
        "Level": "Pawn",
        "Module": "Rook Moves",
        "FEN": "8/8/2pPP3/2PRp3/2pPP3/8/8/8 w - -",
        "Question": "Looks like our rook is stuck. Play the only move that sets it free from this pawn prison. ",
        "Answer": "Rxe5"
    },
    {
        "Level": "Pawn",
        "Module": "Rook Moves",
        "FEN": "3r2r1/3p4/8/8/3R2p1/3R4/8/8 w - -",
        "Question": "Which of black's pawns should we capture with our white rook? Think of which one gives us a better trade. Now, Circle the correct pawn:",
        "Answer": "d7"
    },
    {
        "Level": "Pawn",
        "Module": "Rook Moves",
        "FEN": "r7/8/P7/8/R7/8/8/8 w - -",
        "Question": "Which of white's pieces are we allowed to capture with our black rook? Circle the answer: (Only the Pawn/Only the Rook/Both)",
        "Answer": "pawn"
    },
    {
        "Level": "Pawn",
        "Module": "Rook Moves",
        "FEN": "8/8/8/8/8/8/4R3/4R3 w - -",
        "Question": "What do we call two rooks doubled in one rank like this? This is a powerful formation that we'll see in a lot of our games.",
        "Answer": "A battery."
    },
    {
        "Level": "Pawn",
        "Module": "Bishop Moves",
        "FEN": "8/1b6/8/8/8/4B3/8/8 w - -",
        "Question": "Can we ever capture black's bishop with our white bishop? Why or why not?",
        "Answer": "No."
    },
    {
        "Level": "Pawn",
        "Module": "Bishop Moves",
        "FEN": "8/8/8/8/8/1P4P1/P1PP1P1P/R4B1R w - -",
        "Question": "Where can we move our bishop so that it has the longest diagonal?",
        "Answer": "Bg2"
    },
    {
        "Level": "Pawn",
        "Module": "Bishop Moves",
        "FEN": "6r1/r3p3/5p2/2p1B3/1p6/8/8/2b5 w - -",
        "Question": "Our bishop is in trouble. Find the only square it can move to without being captured.",
        "Answer": "Bh2"
    },
    {
        "Level": "Pawn",
        "Module": "Bishop Moves",
        "FEN": "r6r/pbpp1pbp/1p4p1/4p3/8/1P2P2P/PBPPBPP1/R6R w - -",
        "Question": "Circle the \"fianchettoed\" bishops in this diagram from both sides. What is special about this type of bishop?",
        "Answer": "b7, g7"
    },
    {
        "Level": "Pawn",
        "Module": "Bishop Moves",
        "FEN": "8/p3p2p/1p1p2p1/R1P1B2B/8/8/8/8 w - -",
        "Question": "All our pieces are under attack. Which one do we save? Try ranking them from least to most valuable.",
        "Answer": "the rook."
    },
    {
        "Level": "Pawn",
        "Module": "Bishop Moves",
        "FEN": "r7/7P/4P3/1P6/2P1P3/1P3PP1/P2P4/1B6 w - -",
        "Question": "Bishop maze. Draw the path showing how the white bishop captures to the black rook.",
        "Answer": "Bd3, Bf1, Bh3, Bf5, Bg6, Be8, Bc6, Bxa1"
    },
    {
        "Level": "Pawn",
        "Module": "Knight Moves",
        "FEN": "8/pb3pb1/3p4/p5rp/1p4p1/1r6/8/1N6 w - -",
        "Question": "Mission: move the knight to the end of the board without landing on any squares attacked by black pieces.",
        "Answer": "Nd2, Nc4, Nxd6, Ne8"
    },
    {
        "Level": "Pawn",
        "Module": "Knight Moves",
        "FEN": "3n4/8/8/8/8/8/B7/8 w - -",
        "Question": "Move the bishop to a square that will trap enemy knight and keep it from moving without being captured. This is called 'corralling the knight'. ",
        "Answer": "Bd5"
    },
    {
        "Level": "Pawn",
        "Module": "Knight Moves",
        "FEN": "7r/8/8/8/8/8/8/N7 w - -",
        "Question": "Draw a path that allows the knight to capture the rook. This can be tricky, so try it on a real board first.",
        "Answer": "Nc2, Na3, Nc4, Ne5, Ng6, Nxh8"
    },
    {
        "Level": "Pawn",
        "Module": "Knight Moves",
        "FEN": "8/2PPPpP1/2r3r1/2R1n1R1/2r3r1/2PpPpP1/8/8 w - -",
        "Question": "What is the only square this knight is allowed to move to?",
        "Answer": "Nxd7"
    },
    {
        "Level": "Pawn",
        "Module": "Knight Moves",
        "FEN": "8/R1R1R1R1/3B3P/8/3P3P/PBP1P1P1/8/8 w - -",
        "Question": "Imagine that we had to place a knight on this board. On what square would that knight attack the most white pieces?",
        "Answer": "f5"
    },
    {
        "Level": "Pawn",
        "Module": "Knight Moves",
        "FEN": "3N4/8/1n4n1/8/1n1n3n/3n1n2/5n2/8 w - -",
        "Question": "Mission: get the white knight all the way to the bottom of the board without landing on a square attacked by a black knight.",
        "Answer": "Nb6, Na5, Nc4, Na3, Nb1"
    },
    {
        "Level": "Pawn",
        "Module": "Queen Moves",
        "FEN": "1r5r/4pn2/2b5/4Q3/4P3/8/7b/4q3 w - -",
        "Question": "Circle all the pieces the white queen can capture.",
        "Answer": "b8, h8, h2, e7"
    },
    {
        "Level": "Pawn",
        "Module": "Queen Moves",
        "FEN": "3r3r/ppp2ppp/5n2/4p3/4P3/2N2P2/PPPQ2PP/3R4 w - -",
        "Question": "Is it a fair trade if we capture the rook with our queen?",
        "Answer": "Yes"
    },
    {
        "Level": "Pawn",
        "Module": "Queen Moves",
        "FEN": "b2n4/2p3b1/3p4/r2Q2P1/7P/8/1n3q2/r7 w - -",
        "Question": "Find the only safe square for our queen. Pay attention to all the squares the black pieces are controlling.",
        "Answer": "Qb3"
    },
    {
        "Level": "Pawn",
        "Module": "Queen Moves",
        "FEN": "8/8/8/2PRBN2/8/8/8/8 w - -",
        "Question": "The queen can move like all of these pieces except for one. Circle the piece that can move in ways a queen cannot.",
        "Answer": "Knight"
    },
    {
        "Level": "Pawn",
        "Module": "Queen Moves",
        "FEN": "4r3/2p5/p5b1/8/r7/2b2n2/8/8 w - -",
        "Question": "Visualize: on what square could we place a queen on this board so that it attacks every black piece?",
        "Answer": "c6"
    },
    {
        "Level": "Pawn",
        "Module": "Queen Moves",
        "FEN": "6q1/8/2q5/q7/7q/2q5/6q1/8 w - -",
        "Question": "Circle the square that is not being attacked by a black queen.",
        "Answer": "b1"
    },
    {
        "Level": "Pawn",
        "Module": "Queen Moves",
        "FEN": "r3r3/p1p1qp1p/bp1b2p1/4p3/8/PPQ2N1P/1BP2PP1/R6R w - -",
        "Question": "Is it a fair trade for white if we capture the pawn with our knight?",
        "Answer": "No."
    },
    {
        "Level": "Pawn",
        "Module": "King Moves",
        "FEN": "8/8/8/6k1/5n2/4K3/8/8 w - -",
        "Question": "Can the white king capture the black knight? Explain your answer using king move concepts.",
        "Answer": "No."
    },
    {
        "Level": "Pawn",
        "Module": "King Moves",
        "FEN": "8/8/2K4p/8/8/8/8/8 w - -",
        "Question": "Let's assume it's white's move. Could the white king capture the black pawn before it reaches the end of the board?",
        "Answer": "Yes."
    },
    {
        "Level": "Pawn",
        "Module": "King Moves",
        "FEN": "3r1bbk/8/8/8/2K5/8/8/4q3 w - -",
        "Question": "Move our king to a safe square that's not attacked by an enemy piece.",
        "Answer": "Kb5"
    },
    {
        "Level": "Pawn",
        "Module": "King Moves",
        "FEN": "3b4/3b4/p2r4/1pnb4/2pn4/2r5/1n6/2K1k3 w - -",
        "Question": "Making ONLY piece captures, get our king to the end of the board.",
        "Answer": "b2, c3, d4, c5, d6, d7 , d8"
    },
    {
        "Level": "Pawn",
        "Module": "King Moves",
        "FEN": "6b1/p1qp4/4n3/8/r4n2/8/4P2r/4K3 w - -",
        "Question": "Without landing on a square attacked by an enemy piece, draw the path the white king can take to get to the top of the board.",
        "Answer": "Kd2, Ke3, Kf3, Kg4, Kf5, Kf6, Ke7, Ke8"
    },
    {
        "Level": "Pawn",
        "Module": "King Moves",
        "FEN": "8/8/8/8/1q6/1b3BB1/8/1K4k1 w - -",
        "Question": "Which king has more legal squares? White or black?",
        "Answer": "White."
    },
    {
        "Level": "Knight",
        "Module": "Impossible Positions",
        "FEN": "rnbkqbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBKQBNR w KQkq -",
        "Question": "What is wrong with this starting position? Carefully check every piece.",
        "Answer": "King/Queen are on the wrong square."
    },
    {
        "Level": "Knight",
        "Module": "Impossible Positions",
        "FEN": "r1bqkb1r/pppp1ppp/2n2n2/4p1B1/4P3/2N2N2/PPPP1PPP/R2QKB1R w KQkq -",
        "Question": "Why is this position impossible?",
        "Answer": "Bishop"
    },
    {
        "Level": "Knight",
        "Module": "Impossible Positions",
        "FEN": "r2qr1k1/pppbbppp/2np1n2/1B6/3NP3/2N1B1P1/PPP2PBP/R2Q1RK1 w KQkq -",
        "Question": "Something is not quite right with these minor pieces. What is impossible about them?",
        "Answer": "Extra Bishop"
    },
    {
        "Level": "Knight",
        "Module": "Impossible Positions",
        "FEN": "r1bq1rk1/p1p2ppp/2p2n2/p2pp3/1bPP4/P1N2N2/1P2PPPP/R1BQ1RK1 w KQkq -",
        "Question": "Explain why we could never get this position in a real game. ",
        "Answer": "Extra Pawn on black side."
    },
    {
        "Level": "Knight",
        "Module": "Impossible Positions",
        "FEN": "rnb1k2r/ppp1qppp/5n2/1B6/8/P1P2N2/5PPP/R1BQK2R w KQkq -",
        "Question": "Examine the pieces and describe what makes this setup impossible.",
        "Answer": "Both kings in check."
    },
    {
        "Level": "Knight",
        "Module": "Impossible Positions",
        "FEN": "r1bq1rk1/1p2pppp/p1np1n2/4b3/3NPP2/2NBB3/PPP3PP/R2Q1RK1 w KQkq -",
        "Question": "Why couldn't we arrive at this position in a real game?",
        "Answer": "black's dark-squared bishop "
    },
    {
        "Level": "Knight",
        "Module": "Check",
        "FEN": "rnbqk2r/pp3pbp/5np1/3p4/3P4/1PN2N2/P4PPP/R1B1KB1R w KQkq -",
        "Question": "Play a move that checks the black king in this position.",
        "Answer": "Bb5+"
    },
    {
        "Level": "Knight",
        "Module": "Check",
        "FEN": "r2qkb1r/pp3ppp/2ppbn2/8/1nBNP3/2N2Q2/PPPB1PPP/R3K2R b KQkq -",
        "Question": "What are the two ways black can check the white king in this position?",
        "Answer": "Nxc2+, Nd3+"
    },
    {
        "Level": "Knight",
        "Module": "Check",
        "FEN": "r1b1kbnr/ppp1pppp/2n5/8/2B1q3/5N2/PPPP1PPP/RNBQK2R w KQkq -",
        "Question": "The black queen just checked our king. Why can't we castle our king to safety? What rule does this violate?",
        "Answer": "No castles vs a check."
    },
    {
        "Level": "Knight",
        "Module": "Check",
        "FEN": "5B2/7N/4k3/8/3P4/5P2/4B1P1/RK5Q w - -",
        "Question": "There are five ways to check the black king. Can you find them all?",
        "Answer": "Ra5+, Nc5+, d5+, Bc4+, Qh3+"
    },
    {
        "Level": "Knight",
        "Module": "Check",
        "FEN": "4r3/2p2ppp/1p6/p3P1k1/P2P4/8/1PP2KPP/3R4 w KQkq -",
        "Question": "Find a move that delivers check in this position for either white or black.",
        "Answer": "h4+"
    },
    {
        "Level": "Knight",
        "Module": "Check",
        "FEN": "r1bk3r/ppp1bppp/2n2n2/4p3/4P3/2N1BN2/PPP1BPPP/R3K2R w KQkq -",
        "Question": "Find a way to move the white king and check the black king at the same time.",
        "Answer": "O-O-O+"
    },
    {
        "Level": "Knight",
        "Module": "CheckMate in One",
        "FEN": "3Brrn1/7p/4kb2/1R2np2/2P1pPpP/1K2PNP1/3Q4/7R w - -",
        "Question": "Mate the black king in one move. Try to identify the escape squares we are trying to take away.",
        "Answer": "Qd5++"
    },
    {
        "Level": "Knight",
        "Module": "CheckMate in One",
        "FEN": "rn1Q1b2/1p1b1p2/2k1p3/p1p1P1pr/P5Pp/2N5/RP2BP1P/1NB1K1R1 w - -",
        "Question": "Now checkmate using a minor piece.",
        "Answer": "Bb5++"
    },
    {
        "Level": "Knight",
        "Module": "CheckMate in One",
        "FEN": "2b1n2r/r1pqBppp/p1k2b2/2Pp3P/p1N2P2/NP1P2PR/R3P3/3K1B2 w - -",
        "Question": "Try checkmating with a knight. These are often easy to miss over the board.",
        "Answer": "Na5++"
    },
    {
        "Level": "Knight",
        "Module": "CheckMate in One",
        "FEN": "3r2n1/7r/bp1bp3/3pPkp1/2p2P1P/p3pK2/P1P3B1/NQ5R w - -",
        "Question": "Sometimes a piece moves out of the way to let another piece deliver a checkmate. Find that move.",
        "Answer": "c3++"
    },
    {
        "Level": "Knight",
        "Module": "CheckMate in One",
        "FEN": "3Q1nn1/B2b4/2rkp3/7R/1KP3PP/N4P2/3P3R/8 w - -",
        "Question": "How can we capture a piece and checkmate in the same move?",
        "Answer": "Qxf8++"
    },
    {
        "Level": "Knight",
        "Module": "CheckMate in One",
        "FEN": "r1bqkb1r/pp1npppp/2p2n2/8/3PN3/8/PPP1QPPP/R1B1KBNR w KQkq -",
        "Question": "Find this special type of mate is called a \"smothered mate\". Remember this for your games!",
        "Answer": "Nd6++"
    },
    {
        "Level": "Knight",
        "Module": "Chess Notation",
        "FEN": "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/2N5/PPPP1PPP/R1BQK1NR w KQkq -",
        "Question": "After the moves 1. e4 e5 2. Nf3 Nc6 3. Bc4, do we get this board position? If not, circle the piece on the wrong square.",
        "Answer": ""
    },
    {
        "Level": "Knight",
        "Module": "Chess Notation",
        "FEN": "rn1r2k1/ppp2ppp/8/3P3q/5pb1/2PP1QP1/P1P1N2P/R1B1K2R w KQkq -",
        "Question": "Play out this game by Paul Morphy then circle the pieces that are out of place on this board.\n1.e4 e5 2.f4 exf4 3.Bc4 d5 4.Bxd5 Nf6 5.Nc3 Bb4 6.d3 Nxd5 7.exd5 O-O 8.Qf3 Re8+ 9.Ne2 Bxc3+ 10.bxc3 Qh4+ 11.g3 Bg4",
        "Answer": "Rd8, Qh5"
    },
    {
        "Level": "Knight",
        "Module": "Chess Notation",
        "FEN": "r1bB1rk1/pppn1pbp/6N1/8/2P3n1/5N2/PP3PPP/R2QKB1R w KQkq -",
        "Question": "Play out this game by Bobby Fischer then circle the  pieces that are out of place: 1.d4 g6 2.c4 Nf6 3.Nc3 Bg7 4.e4 O-O 5.Bg5 d6 6.Nf3 Nbd7 7.e5 dxe5 8.dxe5 Ng4 9.Nd5 Ngxe5 10.Nxe7+ Kh8 11.Nxg6+ hxg6 12.Bxd8",
        "Answer": "Kg8, Ng4"
    },
    {
        "Level": "Knight",
        "Module": "Chess Notation",
        "FEN": "rnbqkb1r/pp3ppp/2p2n2/3pp3/2PPP3/2N2N2/PP3PPP/R1BQKB1R w KQkq -",
        "Question": "Circle the piece that moves with the notation exd5 that captures a pawn.",
        "Answer": "pawn on e4"
    },
    {
        "Level": "Knight",
        "Module": "Chess Notation",
        "FEN": "8/R7/5k2/8/r2R4/8/R7/5K2 w - -",
        "Question": "There are many rooks, but circle the one that moves with the notation Rdxa4. It's important to tell rooks apart for when you record your tournament games.",
        "Answer": "rook on d4"
    },
    {
        "Level": "Knight",
        "Module": "Chess Notation",
        "FEN": "6k1/8/8/8/2p5/N7/3N4/6K1 w - -",
        "Question": "What is the notation if the knight on a3 captures the pawn on c4?",
        "Answer": "Naxc4"
    },
    {
        "Level": "Bishop",
        "Module": "Fair or not?",
        "FEN": "r2qkb1r/pppb1ppp/2np1n2/1B2p3/4P3/2N2N2/PPPP1PPP/R1BQ1RK1 w KQkq -",
        "Question": "Is white behind in material after Bxc6?",
        "Answer": "No."
    },
    {
        "Level": "Bishop",
        "Module": "Fair or not?",
        "FEN": "r2qr1k1/1p3ppp/pnnb4/3p4/3P4/2N2N2/PP1BQPPP/R3R1K1 w Qq - 0 1",
        "Question": "Does Qxe8 result in a fair trade for white?",
        "Answer": "Yes."
    },
    {
        "Level": "Bishop",
        "Module": "Fair or not?",
        "FEN": "8/1k6/8/8/1p2N3/2pp4/1K6/8 w - - 0 1",
        "Question": "Will we lose the game if we play Nxc3? Can we get a fair trade out of this move?",
        "Answer": "No. Yes."
    },
    {
        "Level": "Bishop",
        "Module": "Fair or not?",
        "FEN": "3r4/pp4pp/2p1k3/8/P4Q2/1P3P2/2PrK1PP/8 w - - 0 1",
        "Question": "Our king is in check, should we play Qxd2 and trade our queen for the two rooks?",
        "Answer": "Yes."
    },
    {
        "Level": "Bishop",
        "Module": "Fair or not?",
        "FEN": "3q2k1/p2r1ppp/1n1r4/3p4/5N2/1P1R4/P2R1PPP/3Q2K1 w - - 0 1",
        "Question": "Can we capture black's pawn without losing material?",
        "Answer": "No."
    },
    {
        "Level": "Bishop",
        "Module": "Fair or not?",
        "FEN": "r1b1r1qk/2p1bppp/p1n5/1p1p4/3P4/3Q1N2/PPB2PPP/R1B1R1K1 w - - 0 1",
        "Question": "Since our queen is protected by the bishop, can we win a pawn with Qxh7+?",
        "Answer": "No."
    },
    {
        "Level": "Bishop",
        "Module": "Scholar's Mate",
        "FEN": "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR w KQkq -",
        "Question": "What two moves can white play next to threaten mate on f7?",
        "Answer": "Qh5/Qf3"
    },
    {
        "Level": "Bishop",
        "Module": "Scholar's Mate",
        "FEN": "rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR w KQkq - 2 3",
        "Question": "Has black prevented scholar's mate by playing Nf6?",
        "Answer": "Yes, at least temporarily."
    },
    {
        "Level": "Bishop",
        "Module": "Scholar's Mate",
        "FEN": "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5Q2/PPPP1PPP/RNB1K1NR w KQkq -",
        "Question": "Defend against scholar's mate in this position as black.",
        "Answer": "Nf6/Qe7/Qf6"
    },
    {
        "Level": "Bishop",
        "Module": "Scholar's Mate",
        "FEN": "r1bqkbnr/pppp1ppp/2n5/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 3 3",
        "Question": "Play a move to stop white from mating on f7.",
        "Answer": "g6/Qe7/Qf6"
    },
    {
        "Level": "Bishop",
        "Module": "Scholar's Mate",
        "FEN": "rnbqk1nr/pppp1ppp/8/2b1p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 3 3",
        "Question": "Stop Scholar's mate here. Watch out for e5.",
        "Answer": "Qe7"
    },
    {
        "Level": "Bishop",
        "Module": "Scholar's Mate",
        "FEN": "rnbqkb1r/pppp1ppp/8/4p2Q/2B1n3/2N5/PPPP1PPP/R1B1K1NR b KQkq - 1 4",
        "Question": "Prevent mate as black without also losing the knight.",
        "Answer": "Nd6"
    },
    {
        "Level": "Bishop",
        "Module": "ABC's of the opening",
        "FEN": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
        "Question": "Play a move by black that activates a minor piece and defends the pawn.",
        "Answer": "Nc6, Nf6, Bd6?"
    },
    {
        "Level": "Bishop",
        "Module": "ABC's of the opening",
        "FEN": "r1bqkbnr/pppp1ppp/2n5/4p3/4P1P1/5N2/PPPP1P1P/RNBQKB1R w KQkq -",
        "Question": "White played g4. What part of the ABC's does this violate?",
        "Answer": "All of them."
    },
    {
        "Level": "Bishop",
        "Module": "ABC's of the opening",
        "FEN": "rnbqkbnr/ppp2ppp/4p3/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
        "Question": "White played e5 creating this pawn chain. Make a move by black that immediately fights for the centre.",
        "Answer": "c5"
    },
    {
        "Level": "Bishop",
        "Module": "ABC's of the opening",
        "FEN": "r1bqk2r/pppp1ppp/2n2n2/6N1/1bB1P3/8/PB3PPP/RN1Q1RK1 b kq - 6 8",
        "Question": "White played Ng5 attacking our position. How should we respond according to the ABC's?",
        "Answer": "0-0"
    },
    {
        "Level": "Bishop",
        "Module": "ABC's of the opening",
        "FEN": "1rbqkb1r/pppppppp/nn6/3PP3/2P5/2N1BN2/PP3PPP/R2QKB1R b KQk - 6 8",
        "Question": "What part of the ABC's has black failed to follow?",
        "Answer": "Control the centre."
    },
    {
        "Level": "Bishop",
        "Module": "ABC's of the opening",
        "FEN": "r1b1kb1r/ppp2ppp/2n5/3q4/3pn3/5N2/PPP2PPP/RNBQR1K1 w kq - 0 8",
        "Question": "We're down a knight and black just played Qxd5. Play a move as white that activates a piece and wins back material.",
        "Answer": "Nc3"
    },
    {
        "Level": "Rook",
        "Module": "Mate in Two",
        "FEN": "1k6/8/2K5/3R4/8/8/8/8 w - -",
        "Question": "We forced black's king onto the edge of the board in this endgame. Now checkmate black in two moves.",
        "Answer": "1. Ra5, Kb8 2.Ra8"
    },
    {
        "Level": "Rook",
        "Module": "Mate in Two",
        "FEN": "2r2r1k/6pp/pqbpQb1N/1p2n3/4P3/2P1B3/PP3PPP/R4RK1 w - -",
        "Question": "Should we take black's queen on b5, or do we have a better move here?",
        "Answer": "Qg8+"
    },
    {
        "Level": "Rook",
        "Module": "Mate in Two",
        "FEN": "r2qkbnr/ppp2ppp/2np4/4N3/2B1P3/2N5/PPPP1PPP/R1BbK2R w KQkq - 0 2",
        "Question": "We just lost a queen after black played Bxd1. Punish black with two moves leading to a checkmate.",
        "Answer": "Bxf7+, Ke7, Nd5++"
    },
    {
        "Level": "Rook",
        "Module": "Mate in Two",
        "FEN": "r4rk1/pp4pp/2p3n1/3p2N1/2P2PK1/6P1/PP5q/R1BQ1RN1 b - -",
        "Question": "This one is from a famous game played by Najdorf. Find the checkmate in two for black. (Hint: it involves a sacrifice).",
        "Answer": ""
    },
    {
        "Level": "Rook",
        "Module": "Mate in Two",
        "FEN": "1k6/8/1K6/5B2/1N6/8/8/8 w - - 0 1",
        "Question": "Checkmate black in two moves in this rare bishop and knight ending.",
        "Answer": "1. Na6+ Ka8 2. Be4++"
    },
    {
        "Level": "Rook",
        "Module": "Mate in Two",
        "FEN": "kbK5/pp6/1P6/8/8/8/8/R7 w - - 0 1",
        "Question": "This is tricky mate in two puzzle created by Paul Morphy at the age of ten. What's white's best move in this position?",
        "Answer": "Ra6!"
    },
    {
        "Level": "Rook",
        "Module": "Magic if",
        "FEN": "r1bqk1nr/pppp1p1p/6p1/2b5/2BpP3/3P4/PPP2PPP/RNB1K2R w KQkq -",
        "Question": "Where would you place a white queen on this board? Place it on the square that gives us the biggest advantage.",
        "Answer": "Qe5"
    },
    {
        "Level": "Rook",
        "Module": "Magic if",
        "FEN": "r3k2r/pp1qn1pp/5p2/3p4/8/8/PP2QPPP/2R1R1K1 b - -",
        "Question": "Notice the pressure on black's e7 square. Where would you place a knight on this board to improve white's attack?",
        "Answer": "Nf5"
    },
    {
        "Level": "Rook",
        "Module": "Magic if",
        "FEN": "r2q1rk1/pbpn1p1p/1p2pPpQ/4P3/3P4/2NB4/PPP3PP/2KR3R b Kq -",
        "Question": "White is threatening mate on g7. Put a knight on the board to defend the position as black.",
        "Answer": "knight on e8 or h5"
    },
    {
        "Level": "Rook",
        "Module": "Magic if",
        "FEN": "5r1k/pp4pp/2p5/4q3/4P3/8/PPP2PPP/3R2K1 w - -",
        "Question": "Put a piece anywhere on this board that will give white the biggest advantage.",
        "Answer": "knight on f7."
    },
    {
        "Level": "Rook",
        "Module": "Magic if",
        "FEN": "3r4/p2q1pkp/3n1np1/8/8/1N2P3/P2BQPPP/R5K1 b - -",
        "Question": "Find the best place to put a white pawn on this board. Think back to your tactical lessons.",
        "Answer": "e5"
    },
    {
        "Level": "Rook",
        "Module": "Magic if",
        "FEN": "3r2k1/p4ppp/8/8/8/2R1P3/P3QPPP/6K1 w - -",
        "Question": "Of course d1 would be the best place to put a black queen, but what would be the next best square?  (Hint: look for a double or triple attack)",
        "Answer": "Qc2"
    }
]

const MAX_BOARDS_PER_ROW = 3;
const boards = [];
var puzzles;
var containerDiv = document.querySelector(".container");
numPuzzles = 0;

while (numPuzzles < puzzles.length) {
    var row = document.createElement('div');
    row.classList.add("row");
    containerDiv.appendChild(row);

    for (var j = 0; j < MAX_BOARDS_PER_ROW; j++) {
        addPuzzle();
    }
}
    
function addPuzzle() {
    containerDiv.lastElementChild.innerHTML += '<div class="col-xs-12 col-md-6 col-lg-4">' +
    '<p>'+ (numPuzzles+ 1) + '. ' + puzzles[numPuzzles].Question + '</p>' + '<div id=' + 'board' + numPuzzles + ' style="width: 300px"></div>' +
    '<p>(Level: ' + puzzles[numPuzzles].Level + '; Module: ' + puzzles[numPuzzles].Module + ')</p>'+'</div>';
    
    ChessBoard('board' + numPuzzles, {
        //draggable: true,
        position: puzzles[numPuzzles].FEN,
        showNotation: false,
    });
    
    numPuzzles++;
}
