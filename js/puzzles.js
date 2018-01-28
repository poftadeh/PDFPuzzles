var puzzles = [{
        "Game": "Paul Morphy vs Adolf Anderssen",
        "FEN": "r1bqkbnr/pp4pp/2np4/1N2p3/4Pp2/2N1B3/PPP2PPP/R2QKB1R w KQkq - 0 1",
        "StockFish Analysis": "1.�Nd5�Kf7�2.�Bc1�Rb8�3.�g3�Nf6�4.�Nxf6Qxf6�5.�Nc7�Be6�6.�Bg2�Bc4�7.�gxf4�exf48.�Nd5�Qg5�9.�Nxf4"
    },
    {
        "Game": "Morphy vs Alexander Meek",
        "FEN": "rnb3kr/pp2q2p/2pp4/6P1/3PPQp1/2N5/PPP3P1/4RRK1 w - - 0 1",
        "StockFish Analysis": "1.�Nd5�Qe8�2.�Nf6+�Kf7�3.�Qxd6�Bf5�4.�Rxf5Nd7�5.�Nxd7+�Kg7�6.�Qh6+�Kg8�7.�Nf6+�Kf78.�Nxe8+�Kxe8�9.�Qf6�Rg8�10.�Qf7+�Kd811.�Qxg8+�Kc7�12.�Qxa8�c5"
    },
    {
        "Game": "Alexander Meek vs Morphy",
        "FEN": "Q7/p1p1q1pk/3p2rp/4n3/3bP3/7b/PP3PPK/R1B2R2 b - - 0 1",
        "StockFish Analysis": "1...�Bxg2�2.�Qh8+�Kxh8�3.�Bg5�Qxg5�4.�b3Nf3#"
    },
    {
        "Game": "J Schulten vs Morphy",
        "FEN": "r2q2k1/pp3ppp/8/8/2Pn1Pn1/3P4/P1PBb1PP/RQ4KR b - - 0 1",
        "StockFish Analysis": "1...�Nf3+�2.�gxf3�Qd4+�3.�Kg2�Qf2+�4.�Kh3Qxf3+�5.�Kh4�Ne3�6.�Rg1�Nf5+�7.�Kg5�Qh5#"
    },
    {
        "Game": "Thomas Barnes vs Morphy",
        "FEN": "r3k3/ppp2Npp/4Bn2/2b5/1n1pp3/N4P2/PPP3qP/R2QKR2 b - - 0 1",
        "StockFish Analysis": "1...�Nd3+�2.�Qxd3�exd3�3.�Rf2�Qg1+�4.�Kd2Qxf2+�5.�Kxd3�Qe3+�6.�Kc4�Qxe6+�7.�Kd3Kxf7�8.�Rd1�Re8�9.�Rd2�Qe3+�10.�Kc4�Bxa311.�Rxd4�Qe2+�12.�Rd3�Qxc2+�13.�Rc3�Qxb214.�Rb3�Qxa2�15.�h3�a6�16.�Kc3"
    },
    {
        "Game": "Pierre Saint Amant vs Morphy",
        "FEN": "3r1rk1/ppp2ppp/7q/8/2B2n2/2Q4P/PP1N1P1K/3R1R2 b - - 0 1",
        "StockFish Analysis": "1...�Rd3�2.�Qxd3�Nxd3�3.�Bxd3�Qd6+�4.�Kg2Qxd3�5.�Nf3�Qg6+�6.�Kh2�Qf6�7.�Kg2�Qg6+8.�Kh2�Qe6�9.�a3�Qb3�10.�Kg2�Qxb2�11.�Rd7Qc2�12.�Rfd1�Re8�13.�Re1�Kf8�14.�Ne5�f6"
    },
    {
        "Game": "Morphy vs Daniel Harrwitz",
        "FEN": "4q2k/1p2b2p/p2p2r1/2rPpN1R/8/7P/PP2QRP1/6K1 w - - 0 1",
        "StockFish Analysis": "1.�Rxh7+�Kxh7�2.�Qh5+�Kg8�3.�Nxe7+�Qxe74.�Qxg6+�Qg7�5.�Qe6+�Kh7�6.�Rf5�Qg67.�Rf7+�Qxf7�8.�Qxf7+�Kh8�9.�Qf8+�Kh710.�Qxd6�b6�11.�Qxe5�a5�12.�Qe7+�Kg613.�Qe6+�Kg7�14.�d6�Kf8�15.�d7"
    },
    {
        "Game": "O Mongredien vs Morphy",
        "FEN": "2k5/ppp2ppp/2r5/5n2/1P6/P2P1R2/4N1PP/7K b - - 0 1",
        "StockFish Analysis": "1...�Nd4�2.�b5�Rc5�3.�Rxf7�Nxe2�4.�g3�Rxb55.�Rxg7�h5�6.�Kg2�Nc1�7.�Rg8+�Kd7�8.�Rg7+Kc6�9.�Rg6+�Kc5�10.�Rh6�Rb2+�11.�Kh3�Ra212.�Rxh5+�Kb6�13.�g4�Nxd3�14.�Kg3�Rxa3"
    },
    {
        "Game": "Daniel Harrwitz vs Morphy",
        "FEN": "8/2R5/1p1p2p1/1P1P4/2P1bk1P/7r/4BK2/8 b - - 0 1",
        "StockFish Analysis": "1...�Rh2+�2.�Ke1�Ke3�3.�Ra7�Rxe2+�4.�Kf1Rb2�5.�Ra1�Bd3+�6.�Kg1�Kd4�7.�Ra6�Kc58.�Ra7�Bxc4�9.�Rf7�Bxd5�10.�Rf2�Rb4�11.�Rf6Rxh4�12.�Rxg6�Be4�13.�Rg5+�d5�14.�Kf2Kxb5"
    },
    {
        "Game": "J Schulten vs Morphy",
        "FEN": "3r2k1/p4ppp/1nP5/2q4n/7P/1P3P2/PKP1R3/R1BQ4 b - - 0 1",
        "StockFish Analysis": "1...�Na4+�2.�Kb1�Nc3+�3.�Kb2�Nxd1+�4.�Kb1Nc3+�5.�Kb2�Nd1+�6.�Kb1�Nc3+�7.�Kb2Nxe2�8.�c4�Qd4+�9.�Ka3�Qxa1�10.�Bg5�Rd611.�Bd8�Rxd8�12.�c7�Qc1+�13.�Ka4�Rc814.�Kb5�Rxc7�15.�Kb4�Qc2�16.�f4�Qd2+17.�Kb5�Nhxf4"
    },
    {
        "Game": "Adolf Anderssen vs M Wyvill",
        "FEN": "r4rk1/pbqpb1pp/1p4nn/1Bp2pNQ/2P2P2/2NP2R1/PP4PP/R1B3K1 w - - 0 1",
        "StockFish Analysis": "1.�Nxh7�Qd6�2.�Nxf8�Nxf8�3.�h3�Qd4+4.�Be3�Qf6�5.�Bd2�Qh4�6.�Qxh4�Bxh4�7.�Re3Bf6�8.�Kh2�Nf7�9.�Rf1�Nd6�10.�Ba4�Rd811.�Re2�Ne6�12.�Nd5�Bxb2�13.�Be3�Bxd514.�cxd5"
    },
    {
        "Game": "Adolf Anderssen vs Karl Lepge",
        "FEN": "1q2r3/k4p2/prQ2b1p/R7/1PP1B1p1/6P1/P5K1/8 w - - 0 1",
        "StockFish Analysis": "1.�Rxa6+�Rxa6�2.�Qd7+�Kb6�3.�c5#"
    },
    {
        "Game": "Adolf Anderssen vs Carl Mayet",
        "FEN": "r1k4r/p4R2/n1N4p/1N6/2n5/8/PPP3PP/3R3K w - - 1 1",
        "StockFish Analysis": "1.�Rdd7�Re8�2.�Rc7+�Nxc7�3.�Rxc7#"
    },
    {
        "Game": "Anderssen vs Daniel Harrwitz",
        "FEN": "5Qn1/6r1/q2p2pk/3p2Np/3NP2P/5PR1/P1K5/8 w - - 0 1",
        "StockFish Analysis": "1.�Nf5+�gxf5�2.�Nf7+�Kh7�3.�Rxg7#"
    },
    {
        "Game": "Anderssen vs Carl Mayet",
        "FEN": "r1b1r1k1/1ppp1ppp/p1n3n1/4P2q/4R3/B1QB1N2/P4PPP/3R2K1 w - - 0 1",
        "StockFish Analysis": "1.�g4�Qh6�2.�Bc1�d5�3.�exd6�Rxe4�4.�Bxh6Rxg4+�5.�Kh1�gxh6�6.�d7�Bxd7�7.�Bxg6�Rxg68.�Rxd7�Rc8�9.�Qc5�Rd6�10.�Rxd6"
    },
    {
        "Game": "Anderssen vs Johannes Zukertort",
        "FEN": "rnbk1r2/1pp1npb1/p2p1Nq1/3P4/2B4p/2B5/PPP4Q/4RR1K w - - 0 1",
        "StockFish Analysis": "1.�Qxd6+�Bd7�2.�Qxe7+�Kc8�3.�Rg1�Qf54.�Rxg7�Rh8�5.�Qxf7�b6�6.�Kg1�Rd8�7.�Nxd7Qxf7�8.�Nxb6+�cxb6�9.�Rxf7�Nd7�10.�Bd3Kc7�11.�Bf5�Rg8+�12.�Kh2�Rad8�13.�Be5+Kc8�14.�Bf6�Kc7�15.�Bxd8+�Rxd8�16.�Ree7"
    },
    {
        "Game": "Adolf Anderssen vs Johannes Zukertort",
        "FEN": "r1b3kr/ppppQ2p/n5q1/3N4/3PP3/8/PPP3PP/R1B3K1 w - - 1 0",
        "StockFish Analysis": "1.�Bh6�Qxh6�2.�Rf1�Qe3+�3.�Nxe3�h6�4.�Rf8#"
    },
    {
        "Game": "Adolf Anderssen vs NN",
        "FEN": "2r2b2/p2q1P1p/3p2k1/4pNP1/4P1RQ/7K/2pr4/5R2 w - - 0 1",
        "StockFish Analysis": "1.�Qxh7+�Kxh7�2.�g6+�Kh8�3.�Rh4+�Bh64.�Rxh6#"
    },
    {
        "Game": "Anderssen vs Gustav Neumann",
        "FEN": "5rn1/pppkq3/2n2b2/3p1Pp1/PP1P4/2PQ1NN1/5K2/R1B5 w - - 0 1",
        "StockFish Analysis": "1.�b5�Nd8�2.�Ba3�Qg7�3.�Bxf8�Qxf8�4.�Ne5+Kc8�5.�Qf3�Be7�6.�Re1�Bd6�7.�Nh5�Nh6�8.�f6Bxe5�9.�Rxe5�Qa3�10.�Re8�Qa2+�11.�Kg3�Qa112.�Kg2�Qa2+�13.�Qf2�Qxf2+�14.�Kxf2�Nf715.�Re7�Nd6"
    },
    {
        "Game": "Steinitz vs Strauss",
        "FEN": "r5r1/pp2kpBQ/3pn3/6q1/8/8/P4PPP/3RR1K1 w - - 0 1",
        "StockFish Analysis": "1.�Rxe6+�Kxe6�2.�Qe4+�Qe5�3.�Bxe5�dxe54.�f4�Ke7�5.�Qxb7+�Kf6�6.�fxe5+�Kg7�7.�Rd7Rgf8�8.�e6�Kh6�9.�Qe4�Kg7�10.�Qf4�Rac811.�Rxf7+�Rxf7�12.�Qxf7+�Kh6�13.�e7�Rc1+14.�Kf2�Rc2+�15.�Ke3"
    },
    {
        "Game": "Steinitz vs Henry Bird",
        "FEN": "r1b1kb1r/ppp2ppp/2n1p3/6B1/3P2q1/3B1N2/PPP2PPP/R2QK2R w - - 0 1",
        "StockFish Analysis": "1.�h3�Qxg2�2.�Rh2�Qxh2�3.�Nxh2�Bd6�4.�Nf3f6�5.�Bd2�Nb4�6.�Be2�Kf7�7.�c3�Nc6�8.�Bd3Bd7�9.�Qe2�Ne7�10.�Qe4�Bc6�11.�Qg4�Ng6"
    },
    {
        "Game": "Steinitz vs Von Bardeleben",
        "FEN": "1k6/p1p3pp/bpn1B3/8/8/P1b5/3r1PPP/2Q3KR b - - 0 1",
        "StockFish Analysis": "1...�Nd4�2.�Bg4�Ne2+�3.�Bxe2�Bxe2�4.�h4Rd1+�5.�Qxd1�Bxd1�6.�h5�c5�7.�h6�gxh68.�Rxh6�Bc2�9.�Re6�c4�10.�Re8+�Kc711.�Re7+�Kc6�12.�Rxa7�Bd4�13.�Re7�Bd3"
    },
    {
        "Game": "Steinitz vs Szymon Winawer",
        "FEN": "r1q1k2r/ppp2p2/1n3Ppp/3pN3/3Pn1Q1/B1P5/P1P3PP/1R3RK1 w - - 0 1",
        "StockFish Analysis": "1.�Qxg6�Rf8�2.�Nxf7�Rxf7�3.�Qg8+�Kd74.�Qxf7+�Kc6�5.�Qe7�Nd6�6.�f7�Qf8�7.�Qe6Rc8�8.�Bc5�a6�9.�Rf5�Nc4�10.�Kh1"
    },
    {
        "Game": "Steinitz vs Martinez",
        "FEN": "2r1kb1r/R6p/1pn2p2/6pn/1P2Pp2/2PB1N2/2K3PP/2B4R w - - 0 1",
        "StockFish Analysis": "1.�Bb5�Bd6�2.�Nd4�Rc7�3.�Rxc7�Bxc7�4.�Nxc6Kf7�5.�Rd1�Kg6�6.�Ne7+�Kh6�7.�Nf5+�Kg68.�Rd7�Bb8�9.�Be2�Be5�10.�Ne7+�Kh611.�Nf5+�Kg6�12.�Ra7�Bb8�13.�Rb7�Be514.�Ne7+�Kh6�15.�Nf5+�Kg6�16.�Rd7�Rb817.�Bc4�g4"
    },
    {
        "Game": "Steinitz vs Zoran Devide",
        "FEN": "r1bq3k/pppp1Qp1/7p/4b3/2B5/8/P4PPP/R1B3K1 w - - 0 1",
        "StockFish Analysis": "1.�Bg5�d5�2.�Bxd8�dxc4�3.�Re1�Be6�4.�Qxe6Bxh2+�5.�Kxh2�Rxd8�6.�Qxc4�c5�7.�Qf7�Rg88.�Re8�Rxe8�9.�Qxe8+�Kh7�10.�Qe4+�Kh811.�Qxb7�Kg8�12.�Qd5+�Kh8�13.�Qxc5�Kh714.�Qxa7"
    },
    {
        "Game": "Steinitz vs N Jasnogrodsky",
        "FEN": "6rk/1pp1qp1p/r1b4Q/n3pPp1/p3P2P/1PP2N2/P1B4K/R2R4 w - - 0 1",
        "StockFish Analysis": "1.�f6�Rg6�2.�Qxg6�fxg6�3.�fxe7�Kg7�4.�Rd8Kf7�5.�Nxg5+�Kxe7�6.�Rh8�axb3�7.�axb3�Bd78.�Rf1�Be6�9.�Rxh7+�Ke8�10.�Nxe6�Rxe611.�b4�Rd6�12.�Ba4+�b5�13.�Bxb5+�c614.�bxa5�cxb5"
    },
    {
        "Game": "Steinitz vs C Enschede",
        "FEN": "3qn1k1/1p2b1pp/p1r1p1r1/n2p2B1/3P2B1/2N3P1/PP2QP1P/2R2RK1 w - - 0 1",
        "StockFish Analysis": "1.�Bxe7�Qxe7�2.�Nxd5�Qd7�3.�Nf4�Rxg44.�Qxg4�Nf6�5.�Qe2�Rd6�6.�Rfe1�Nc6�7.�Nxe6b5�8.�Nc5�Nxd4�9.�Nxd7�Nxe2+�10.�Rxe2Nxd7�11.�Rc8+�Kf7�12.�Rc7�Kf8"
    },
    {
        "Game": "Steinitz vs W Meiners",
        "FEN": "r5nk/pppr2pp/5p2/n1qNpP1Q/4P3/1BP5/PP4PP/3R1R1K w - - 0 1",
        "StockFish Analysis": "1.�Nf4�exf4�2.�Rxd7�Nxb3�3.�Qf7�Qf8�4.�Qxf8Rxf8�5.�axb3�Re8�6.�Rxc7�Rxe4�7.�Rxb7�Re28.�Rxa7�Rxb2�9.�b4�Rb3�10.�Kg1�Rxc311.�Rxf4"
    },
    {
        "Game": "Steinitz vs Herbert Trenchard",
        "FEN": "r2qrb2/p1pn1Qp1/1p4Nk/4PR2/3n4/7N/P5PP/R6K w - - 0 1",
        "StockFish Analysis": "1.�Ne7�Nxf5�2.�Qg6#"
    },
    {
        "Game": "Henry Bird vs Emanuel Lasker",
        "FEN": "r4r1k/6pp/1pP2b2/1Bn1q3/2QNp3/8/3R1PPP/4R1K1 b - - 0 1",
        "StockFish Analysis": "1...�Nd3�2.�Rf1�Qxd4�3.�Qxd4�Bxd4�4.�g3Rac8�5.�Kg2�Rf5�6.�Ba6�Rxc6�7.�Bb7�Rcf68.�Bxe4�Rxf2+�9.�Rfxf2�Rxf2+�10.�Rxf2�Nxf211.�Bf3�Nd3�12.�Be4"
    },
    {
        "Game": "Emanuel Lasker vs Theodor Von Scheve",
        "FEN": "8/p3R3/3p1pkp/2pP2p1/2P3Q1/7P/Prq2PPK/8 w - - 0 1",
        "StockFish Analysis": "1.�Qe6�h5�2.�Qf7+�Kf5�3.�Re6�Kf4�4.�Qxf6+Qf5�5.�g3+�Kf3�6.�Qxf5#"
    },
    {
        "Game": "Emanuel Lasker vs Raimond",
        "FEN": "5r1r/p1p4p/1p5k/5q2/3P1p2/5Q1P/P4P1K/2B3R1 w - - 0 1",
        "StockFish Analysis": "1.�Rg4�Rhg8�2.�Bxf4+�Qxf4+�3.�Rxf4�Kg74.�Qg3+�Kh8�5.�Rxf8�Rxf8�6.�Qxc7�b57.�Qxa7�Kg8�8.�d5�Rf7�9.�Qb8+�Kg7�10.�Kg3Kf6�11.�Qd8+�Kg7�12.�Qg5+�Kf8�13.�Qd8+Kg7�14.�Qb8�Kf6�15.�Qb6+�Ke7�16.�Qc7+�Kf8"
    },
    {
        "Game": "Francis Lee vs Emanuel Lasker",
        "FEN": "3r4/1r3k2/5b2/2p4p/p1N1n1pP/2Pp1pP1/PP3P2/1R1RNK2 b - - 0 1",
        "StockFish Analysis": "1...�d2�2.�Nc2�Nxc3�3.�N2e3�Nxb1�4.�Rxb1Bxb2�5.�Rd1�Bc3�6.�Kg1�Rb4�7.�a3�Rb38.�Kh1�Ke6�9.�Nf1�Rd4�10.�Nfxd2�Bxd211.�Nxd2�Rxa3"
    },
    {
        "Game": "Erich Schmidt vs Emanuel Lasker",
        "FEN": "8/pNp2rpk/5r2/7p/2PP2bP/4P1R1/P6R/4K3 b - - 0 1",
        "StockFish Analysis": "1...�Rb6�2.�Rgg2�Rb1+�3.�Kd2�Rxb7�4.�Kd3Rb1�5.�Rf2�Rd1+�6.�Kc2�Re7�7.�Rf4�Re1�8.�e4R7xe4�9.�Rxe4�Rxe4�10.�Kd3�Re8�11.�Rf2Kg6"
    },
    {
        "Game": "Emanuel Lasker vs Eduardo Vasquez, Habana, 1893",
        "FEN": "r3qrk1/1p1n1ppp/1p6/p3PNN1/P7/1Q6/1P3PPP/R3b1K1 w - - 0 1",
        "StockFish Analysis": "1.�Qh3�Nf6�2.�exf6�Bxf2+�3.�Kh1�Bh44.�Qxh4�h6�5.�Nxh6+�gxh6�6.�Qxh6�Qe1+7.�Rxe1�Rfe8�8.�Qg7#"
    },
    {
        "Game": "Emanuel Lasker vs Wilhelm Steinitz",
        "FEN": "7n/1p1qr2P/p4R2/2kp4/2p5/P7/1PP4Q/1K6 w - - 0 1",
        "StockFish Analysis": "1.�Qg1+�d4�2.�Qg5+�Qd5�3.�Rf5�Rd74.�Rxd5+�Rxd5�5.�Qe7+�Rd6�6.�Qe5+�Kc67.�Qxh8�Rh6�8.�Qc8+�Kb6�9.�h8=Q�Rxh810.�Qxh8�d3�11.�Qd4+�Kb5�12.�Qd5+�Kb613.�Qd6+�Ka7�14.�Qc5+�Kb8�15.�Qxc4�b516.�Qxd3�Kc7�17.�Qd4�Kc6"
    },
    {
        "Game": "Henry Bird vs Emanuel Lasker",
        "FEN": "1r5k/p5pp/3q1n2/5p2/2PP3b/5B1P/P1bNQ1KR/6N1 b - - 0 1",
        "StockFish Analysis": "1...�Re8�2.�Qxe8+�Nxe8�3.�d5�Qb4�4.�Kh1Nd6�5.�Re2�g6�6.�Re6�Bd3�7.�c5�Qxc5�8.�Nb3Qa3�9.�Be2�Be4+�10.�Bf3�Bd3�11.�Nd2�Qxa2"
    },
    {
        "Game": "Geza Maroczy vs Emanuel Lasker",
        "FEN": "3r1rk1/5pp1/1q2p2p/np2P3/4Q3/P7/1B3PPP/R4RK1 b - - 0 1",
        "StockFish Analysis": "1...�Nb3�2.�Rad1�Nd2�3.�Rxd2�Rxd2�4.�Bc3Rd5�5.�Re1�Rc8�6.�Bb4�Qc6�7.�g3�Qc4�8.�Kg2Qxe4+�9.�Rxe4�Rc2�10.�h4�Rd3�11.�g4�Rb312.�g5�Rd3�13.�gxh6"
    },
    {
        "Game": "Emanuel Lasker vs Jacques Mieses",
        "FEN": "3r1k1r/5pp1/p4q2/4Nb1p/8/2P1Q1R1/P4P1P/4RK2 w - - 0 1",
        "StockFish Analysis": "1.�Nc6�Qxc6�2.�Qe7+�Kg8�3.�Qxd8+�Kh74.�Qd4�g6�5.�Kg1�Be6�6.�Rb1�Qa8�7.�c4�Rd88.�Qf4�Qc6�9.�Rc1�Qa4�10.�Rf3�Qxa2�11.�Qg5Rd2�12.�c5"
    },
    {
        "Game": "Emanuel Lasker vs Meyer",
        "FEN": "3R4/3R4/p4k2/r1r2Pp1/6Pp/1p6/1P4P1/6K1 w - - 1 1",
        "StockFish Analysis": "1.�Rf8+�Ke5�2.�Re8+�Kf4�3.�Rd4+�Kg34.�Re3#"
    },
    {
        "Game": "Emanuel Lasker vs Sufranek",
        "FEN": "4N3/7p/2p1R3/6p1/5k2/2PB3P/r4PPn/2K5 w - - 1 0",
        "StockFish Analysis": "1.�Re4+�Kf5�2.�Re3+�Kf4�3.�g3#"
    },
    {
        "Game": "Emanuel Lasker vs Harry Wilson",
        "FEN": "6k1/6B1/6BK/3p1P2/p1p5/2P5/PP4b1/8 w - - 1 0",
        "StockFish Analysis": "1.�f6�Bf3�2.�f7#"
    },
    {
        "Game": "Emanuel Lasker vs Mikhail Chigorin",
        "FEN": "4r2k/pp2P3/5q1p/5N1P/5Q2/2P2pP1/PP5K/8 w - - 0 1",
        "StockFish Analysis": "1.�Qd4�Qxd4�2.�cxd4�Kg8�3.�g4�f2�4.�Kg2f1=R�5.�Kxf1�Kf7�6.�Nd6+�Kxe7�7.�Nxe8Kxe8�8.�Kg2�a5�9.�Kf3�a4�10.�g5�hxg511.�Kg4�b5�12.�d5�a3�13.�bxa3�b4�14.�axb4Ke7"
    },
    {
        "Game": "Emanuel Lasker vs Broderson",
        "FEN": "7k/pp3p1p/3pbPrQ/6p1/2PR4/1P5P/P5P1/6K1 w - - 1 0",
        "StockFish Analysis": "1.�Rxd6�Bd7�2.�Rxd7�b5�3.�Rxf7�Rxh6�4.�Rf8#"
    },
    {
        "Game": "Siegbert Tarrasch vs Emanuel Lasker",
        "FEN": "3Q4/4r1kp/4r3/8/P2p1p2/1P2b3/2P1R1P1/R2KN1q1 b - - 0 1",
        "StockFish Analysis": "1...�f3�2.�gxf3�Bg5�3.�Qxe7+�Rxe7�4.�Ra2Rxe2�5.�Kxe2�Qe3+�6.�Kf1�Bh4�7.�Nd3�Qxf3+8.�Kg1�Qg3+�9.�Kf1�Qh3+�10.�Kg1�Bg511.�Kf2�Be3+�12.�Ke1�Qh1+�13.�Ke2�Qg2+14.�Ke1�Bd2+�15.�Kd1�Bc3"
    },
    {
        "Game": "Emanuel Lasker vs Richard Teichmann",
        "FEN": "r4rk1/2p3p1/p2bP2q/np1p4/3P1pR1/2P2Q1P/P1B2P2/R1B4K w - - 0 1",
        "StockFish Analysis": "1.�e7�Bxe7�2.�Bxf4�Rxf4�3.�Rxf4�c6�4.�Rg1�g55.�Rf7�Rf8�6.�Rxf8+�Qxf8�7.�Qh5�Qf4�8.�Rg3Qf7�9.�Rxg5+�Bxg5�10.�Qxg5+�Kf8�11.�Qd8+Kg7�12.�Qxa5�Qxf2�13.�Qc7+�Kf8�14.�Qd6+Kf7�15.�Qd7+�Kf8�16.�Qd6+�Kf7"
    },
    {
        "Game": "Emanuel Lasker vs NN",
        "FEN": "1rn5/p1pk3p/1rp5/3q2p1/Q2Pbp2/B7/PPP3P1/2K1RB1R w - - 0 1",
        "StockFish Analysis": "1.�Bc4�Qf5�2.�Rh6�Rxb2�3.�Bxb2�Nb6�4.�Qxa7Ra8�5.�Qxa8�Nxa8�6.�Be6+�Qxe6�7.�Rxe6Bxg2�8.�Rh6�Kc8�9.�Re5�f3�10.�Rxg5"
    },
    {
        "Game": "Frank Marshall vs Capablanca",
        "FEN": "1r1r1nk1/pp2qppp/8/PBpp1b2/R2P4/Q1P1PN2/1R3PPP/6K1 b - - 0 1",
        "StockFish Analysis": "1...�a6�2.�Be2�Bd7�3.�g3�Bxa4�4.�Qxa4�c45.�Ne5�f6�6.�Nf3�Ne6�7.�Rb6�Nc7�8.�Qa1�Nb59.�Nh4�g5�10.�Nf3�Nc7�11.�Qb2�Nb5"
    },
    {
        "Game": "Capablanca vs Harry Morris",
        "FEN": "2r3rk/3q1p1p/5p2/1p1p1b2/2pN3R/P1P1R3/1P3PPP/3Q2K1 w - - 0 1",
        "StockFish Analysis": "1.�Re7�Rxg2+�2.�Kxg2�Rg8+�3.�Kh1�Be4+4.�Rexe4�dxe4�5.�Qh5�Rg7�6.�Qxb5�Qxb57.�Nxb5�f5�8.�Nd6�Rg6�9.�Nxf7+�Kg710.�Ne5�Re6�11.�Nxc4�Kg6�12.�Kg2�Re713.�a4�Kg5�14.�Rh3�f4�15.�b4�Rd7"
    },
    {
        "Game": "Capablanca vs Oscar Chajes",
        "FEN": "rq2rb2/2p2kpQ/p6p/1p2P3/1Pn2P2/PB6/6PP/2RR2K1 w - - 0 1",
        "StockFish Analysis": "1.�Rxc4�Re6�2.�Rcd4�Bd6�3.�f5�Qf8�4.�Bxe6+Ke8�5.�exd6�c5�6.�bxc5�Ra7�7.�c6�Kd8�8.�c7+Rxc7�9.�dxc7+�Kxc7�10.�Rd7+�Kb611.�R1d6+�Kc5�12.�Rxa6"
    },
    {
        "Game": "Capablanca vs Edward Lasker",
        "FEN": "8/7p/p7/4kpPP/3p4/3K4/P7/8 w - - 0 1",
        "StockFish Analysis": "1.�h6�Kd6�2.�g6�hxg6�3.�h7�Ke6�4.�h8=Q�f45.�Qg7�Kf5�6.�Qf8+�Kg5�7.�Kxd4�f3�8.�Ke3�f29.�Qxf2�Kh6�10.�Qf4+�Kh7�11.�Qf6�a512.�Qf7+�Kh6�13.�Kf4�a4�14.�Qf8+�Kh715.�Qf7+�Kh6�16.�Qf8+�Kh7�17.�Qe7+�Kg818.�Qe8+�Kg7�19.�Qxa4"
    },
    {
        "Game": "Akiba Rubinstein vs Capablanca",
        "FEN": "r3r1k1/ppq2ppp/2pp1bn1/5N2/2PBPn2/1P1B1Q1P/P4PP1/2R1R1K1 b - - 0 1",
        "StockFish Analysis": "1...�Bxd4�2.�Nxd4�Ne5�3.�Qxf4�Nxd3�4.�Qg3Nxe1�5.�Nf5�g6�6.�Nxd6�Re6�7.�c5�Nxg28.�Kxg2�Qa5�9.�Rc2�Qe1�10.�Kh2�Rf8�11.�f3Qxg3+�12.�Kxg3�Re7�13.�Rd2�f6�14.�h4�Kg715.�Rd1"
    },
    {
        "Game": "M Schroeder vs Capablanca",
        "FEN": "r1b1r1k1/p1q2pp1/2pb3p/n7/2PP2n1/2NQ1N2/PP2B1PP/R1B1K2R b - - 0 1",
        "StockFish Analysis": "1...�Bg3+�2.�Kf1�Nf2�3.�Qd2�Nxh1�4.�Kg1Bxh2+�5.�Nxh2�Ng3�6.�Bd3�Bf5�7.�Nf3�Bxd38.�Qxd3�a6�9.�Be3"
    },
    {
        "Game": "Capablanca vs Marc Fonaroff",
        "FEN": "5rk1/ppq2ppp/2p5/4bN2/4P3/6Q1/PPP2PPP/3R2K1 w - - 0 1",
        "StockFish Analysis": "1.�Nh6+�Kh8�2.�Qxe5�Qxe5�3.�Nxf7+�Kg84.�Nxe5�Re8�5.�f4�g5�6.�Ng4�Re7�7.�Nh6+Kf8�8.�Rd8+�Re8�9.�Rxe8+�Kxe8�10.�fxg5Kd7�11.�Ng4�Kd6�12.�Nf6"
    },
    {
        "Game": "Capablanca vs Ribera",
        "FEN": "r1br1q1k/p3nQp1/1p2p3/2p3NN/7P/8/PPP2PP1/R5K1 w - - 0 1",
        "StockFish Analysis": "1.�Nf6�Ng8�2.�Qh5+�Nh6�3.�Qg6�Qg84.�Nxg8�Kxg8�5.�Qh7+�Kf8�6.�Qh8+�Ng87.�Qh5�Nh6�8.�Qf3+�Kg8�9.�Qxa8�a5�10.�Qa7Rf8�11.�Qxb6�Nf5�12.�Qxa5�Nxh4�13.�Qxc5Ng6�14.�Re1�e5�15.�Qd5+�Kh8�16.�Nf7+�Kh717.�Nxe5"
    },
    {
        "Game": "Milan Vidmar Sr vs Capablanca",
        "FEN": "r2q1rk1/2bb1pp1/2p1p2p/1pPn4/3PN3/pP3BN1/P1Q2PPP/1K1RR3 b - - 0 1",
        "StockFish Analysis": "1...�Ba5�2.�Ne2�Bxe1�3.�Rxe1�Qa5�4.�Rh1�b45.�Re1�Qd8�6.�Qd2�Qh4�7.�g3�Qe7�8.�h4�Rfb89.�Nf4�Qd8�10.�Nd6�Nc3+�11.�Kc1�Qf612.�Be4�Kh8"
    },
    {
        "Game": "Capablanca vs Nicolas Rossolima",
        "FEN": "r5k1/5pp1/Br5p/2R1n3/8/1pK1PP2/1P5P/R7 w - - 0 1",
        "StockFish Analysis": "1.�Bd3�Rd8�2.�Rxe5�Rc8+�3.�Kd2�Rd6�4.�Ke2Rcd8�5.�Rd1�Kf8�6.�Rb5�Rd5�7.�Rxb3�Rh58.�Rh1�Rg5�9.�Kf2�Rgd5�10.�Rd1�Rh5�11.�Kg2Rg5+�12.�Kf2�Rh5�13.�Kg2�Re5�14.�Kf2�Rde815.�e4�Rh5"
    },
    {
        "Game": "Alekhine vs Gutkevitsch",
        "FEN": "r2qnrk1/pp1nbppp/2p1b2B/3p3N/3P1Q1P/2NB4/PPP2PP1/2KR3R w - - 0 1",
        "StockFish Analysis": "1.�Bxg7�f5�2.�Bxf8�Nxf8�3.�Bxf5�Bxf5�4.�Qxf5Qd7�5.�Qxd7�Nxd7�6.�Rde1�Bd6�7.�Re6�Bb48.�Rh3�Nc7�9.�Rh6�Re8�10.�Rg3+�Kh8�11.�Nf4Re1+�12.�Kd2"
    },
    {
        "Game": "Ernst Gruenfeld vs Alekhine",
        "FEN": "2r3k1/3Q1pp1/4p3/p2n4/P2P1b1p/5B1P/1Bq2PP1/3R2K1 b - - 0 1",
        "StockFish Analysis": "1...�Nf6�2.�Qb5�Rb8�3.�Qxa5�Rxb2�4.�Rf1�Kh75.�Qe1�Qc4�6.�Qd1�Ra2�7.�d5�exd5�8.�Qb1+Kg8�9.�Re1�d4�10.�Rd1�Rxa4�11.�Qb6�Kh712.�Re1"
    },
    {
        "Game": "Alekhine vs Manfred Schroder",
        "FEN": "2kr1b1r/pppnpppp/1q3nb1/3P4/5BP1/2N1N2P/PPP2P2/R2QKB1R w - - 0 1",
        "StockFish Analysis": "1.�Nc4�Qa6�2.�Nd6+�Qxd6�3.�Bxd6�exd64.�Bd3�Bxd3�5.�Qxd3�g5�6.�Kf1�Kb8�7.�h4Rg8�8.�Re1�Bh6�9.�Qf5�gxh4�10.�Rxh4"
    },
    {
        "Game": "Karel Opocensky vs Alekhine",
        "FEN": "1k1n3r/1pp5/p4p2/3p1qp1/PP1P4/2P2NPp/4QP1P/4R2K b - - 0 1",
        "StockFish Analysis": "1...�Re8�2.�Ne5�fxe5�3.�g4�Qf4�4.�Qd1�Qxf25.�Qe2�Qxe2�6.�Rxe2�Rf8�7.�Kg1�exd4�8.�cxd4Rf4�9.�Re8�Kc8�10.�b5�Rxd4�11.�bxa6�bxa612.�Rg8�Rxg4+�13.�Kf2�Rg2+�14.�Ke3�Rxh2"
    },
    {
        "Game": "Alekhine vs Asmundur Asgeirsson",
        "FEN": "r5r1/1p1b1kpR/p3p3/2q1P1Q1/8/2N5/PPP2PP1/2K5 w - - 0 1",
        "StockFish Analysis": "1.�Ne4�Rac8�2.�Nd6+�Qxd6�3.�exd6�e54.�Qxe5�Rce8�5.�Qd5+�Re6�6.�Qh5+�Kf87.�Qf3+�Ke8�8.�Qxb7�Rh6�9.�Qe4+�Re610.�Qa8+�Kf7�11.�Qd5�Ke8�12.�Rh4�Kd813.�Rf4"
    },
    {
        "Game": "Alekhine vs Baljet",
        "FEN": "2r3k1/p2b1n1p/3P2p1/2p2p2/qp3B1Q/6P1/1P3PBP/4R1K1 w - - 0 1",
        "StockFish Analysis": "1.�Bd5�Be6�2.�Bxe6�Qe8�3.�d7�Qxd7�4.�Bxd7g5�5.�Bxg5�Rf8�6.�Bxf5�h6�7.�Be7�Re88.�Qg4+�Ng5�9.�h4�Rxe7�10.�Rxe7�Kf811.�Rxa7�Nf7"
    },
    {
        "Game": "Alekhine vs Abraham",
        "FEN": "rr2n1k1/5p1p/p1R3p1/1p1N4/8/P7/1P3PPP/4R1K1 w - - 0 1",
        "StockFish Analysis": "1.�Nb6�Rxb6�2.�Rxb6�Ng7�3.�g3�Ne6�4.�Rd1Nc5�5.�Rc6�Ne6�6.�Rd5�Kf8�7.�Kg2�Ke78.�Rb6�Rd8�9.�Rxd8�Kxd8�10.�Rxa6"
    },
    {
        "Game": "Alekhine vs Max Euwe",
        "FEN": "r1bq1rk1/p4ppp/4p3/2R1P3/P2n4/5N2/2Q1BPPP/1R4K1 w - - 0 1",
        "StockFish Analysis": "1.�Nxd4�Qxd4�2.�Bf3�Bd7�3.�Bxa8�Rxa8�4.�a5h6�5.�Rd1�Qb4�6.�Qc4�Qxc4�7.�Rxc4�Bb58.�Rc7�a6�9.�Rd6�Re8�10.�f3�g6�11.�Kf2�g512.�Rb6�Kg7�13.�Rbb7�Kg6"
    },
    {
        "Game": "Ernesto Rotunno vs Alekhine",
        "FEN": "6k1/1p5p/2P1p3/pP1pN2q/P2Qpr2/7b/5R1P/6K1 b - - 0 1",
        "StockFish Analysis": "1...�Qe2�2.�Nf3�Rg4+�3.�Kh1�Bg2+�4.�Kg1Bxf3+�5.�Rg2�Qxg2#"
    },
    {
        "Game": "Alekhine vs Navarro",
        "FEN": "r3kb1r/pp1nn1p1/2p2qpp/4p3/3P2QP/4B1N1/PPP2PP1/R3KB1R w - - 0 1",
        "StockFish Analysis": "1.�Ne4�Qf5�2.�Nd6+�Kd8�3.�Nxf5�gxf5�4.�Qh3Nd5�5.�Bd2�exd4�6.�Bc4�Bd6�7.�Bxd5�cxd58.�Qd3�Re8+�9.�Kf1�Rc8�10.�Qxd4�Rxc2"
    },
    {
        "Game": "Friedrich Saemisch vs Alekhine",
        "FEN": "6r1/1bp2k1p/3r4/1p2pp2/pP6/2P2P2/RPN1RKPP/8 b - - 0 1",
        "StockFish Analysis": "1...�Bd5�2.�Ra1�Bc4�3.�Rae1�f4�4.�g3�Bxe25.�Rxe2�Rd5�6.�Ne1�Kf6�7.�gxf4�exf4�8.�h4Rb8�9.�Ng2�Kf5�10.�Ne1�Kf6�11.�Ng2�Kf512.�Ne1"
    },
    {
        "Game": "N Liutov vs Botvinnik",
        "FEN": "r5k1/1pp4p/p6q/5bpr/5p2/3PnN2/PPP2QPP/2R1RN1K b - - 0 1",
        "StockFish Analysis": "1...�g4�2.�Re2�gxf3�3.�gxf3�Nd5�4.�Qd4�Bg65.�Rce1�Qg7�6.�Qxg7+�Kxg7�7.�c4�Nb48.�Re7+�Kf8�9.�Rxc7�Nxd3�10.�Re2�Re511.�Rxe5�Nxe5�12.�Kg2�b5�13.�b3�h6�14.�h3"
    },
    {
        "Game": "Botvinnik vs V Breitman",
        "FEN": "r4rk1/1n2qpbp/2bp1npB/1p2p2P/1P2P1P1/2N2PN1/P2Q2B1/2R1K2R w - - 0 1",
        "StockFish Analysis": "1.�Nf5�Qd8�2.�Bxg7�gxf5�3.�Qh6�Nxg44.�fxg4�f6�5.�Bxf8�Qxf8�6.�Qxf8+�Kxf87.�gxf5�Nd8�8.�Bf1�Rb8�9.�Kf2�Nf7�10.�Rd1Ra8�11.�Bxb5�Bxb5�12.�Nxb5�Rxa2+�13.�Kf3Ke7"
    },
    {
        "Game": "Botvinnik vs Vladimir Alatortsev",
        "FEN": "r4rk1/p1p1n1b1/1p1p2p1/3Pp1Pn/2P1P1q1/1P2B1N1/P2QN1B1/2K4R w - - 0 1",
        "StockFish Analysis": "1.�Bh3�Qf3�2.�Rf1�Qxf1+�3.�Nxf1�Kf7�4.�Nfg3Nf4�5.�Bd7�Rad8�6.�Nxf4�exf4�7.�Be6+�Ke88.�Bxf4�a5�9.�Ne2�Ra8�10.�Kc2�a4�11.�b4�Kd812.�Qe3�Ke8�13.�Bg4�Kd8�14.�Be6�Ke815.�Bg4"
    },
    {
        "Game": "Viktor Goglidze vs Botvinnik",
        "FEN": "r1r3k1/5p1p/pQ4p1/N2b4/3Pp3/R3P3/4qPPP/5RK1 b - - 0 1",
        "StockFish Analysis": "1...�Rab8�2.�Qc5�Rxc5�3.�dxc5�Qc2�4.�Raa1Qxc5�5.�Rfc1�Qb5�6.�Rd1�Kg7�7.�h3�Qb28.�Rac1�Qb5�9.�Ra1�Be6�10.�h4�Bd5�11.�h5gxh5�12.�Re1�Qb2�13.�Red1�Qf6�14.�Rac1Rb2�15.�Rf1�Rb5�16.�Nc4�Qe6"
    },
    {
        "Game": "Botvinnik vs Rudolf Spielmann",
        "FEN": "r1b1kb1r/pp2pppp/5n2/3P2B1/Nn1P4/8/q4PPP/2RQKBNR w - - 0 1",
        "StockFish Analysis": "1.�Bc4�Nc2+�2.�Qxc2�Qxc2�3.�Rxc2�Bf5�4.�Ra2Rc8�5.�Nc5�a6�6.�Bb3�Ne4�7.�Be3�Nc3�8.�Rb2b6�9.�Bd2�Nb5�10.�Nxa6�Nxd4�11.�Ba4+�b512.�Bxb5+�Nxb5�13.�Rxb5�h6�14.�Nf3"
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
        try {

            addPuzzle();
        } catch (err) {
            console.log(err);
        }
    }
}

document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', function () {
        console.log(this);
        alert(btn.getAttribute("analysis"));
    })
})

function addPuzzle() {
    containerDiv.lastElementChild.innerHTML += '<div class="col-xs-12 col-md-6 col-lg-4">' +
        '<p>' + (numPuzzles + 1) + '. ' + puzzles[numPuzzles].Game + '</p>' + '<div id=' + 'board' + numPuzzles + ' style="width: 300px"></div>' +
        '<p><button id=b' + numPuzzles + '>StockFish Analysis</button></p>' + '</div>';

    var puz = document.querySelector('#b' + numPuzzles);

    puz.setAttribute("analysis", puzzles[numPuzzles]['StockFish Analysis']);



    ChessBoard('board' + numPuzzles, {
        //draggable: true,
        position: puzzles[numPuzzles].FEN,
        showNotation: false,
    });

    numPuzzles++;
}