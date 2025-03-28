# Whitehole Controller

## Struttura del Progetto

- `backend/` - Server Node.js
- `frontend/` - Applicazione frontend
- `deploy/` - Script di deployment
- `logs/` - Directory per i log

## Requisiti

- Node.js >= 18
- npm >= 9

## Setup Sviluppo Locale

### Backend

1. Naviga nella directory backend:
   ```bash
   cd backend
   ```

2. Installa le dipendenze:
   ```bash
   npm install
   ```

3. Crea un file `.env` con le variabili d'ambiente:
   ```
   PORT=3000
   NODE_ENV=development
   ```

4. Avvia il server in modalità sviluppo:
   ```bash
   npm run dev
   ```

Il server sarà disponibile su http://localhost:3000

### Sviluppo con Bolt.new

1. Apri il progetto su [Bolt.new](https://bolt.new)
2. Importa il repository: `https://github.com/ewh-dam/whitehole-controller`
3. Il progetto si avvierà automaticamente con la configurazione di sviluppo

Vantaggi di Bolt.new:
- Hot reload automatico
- Debug integrato
- Terminale integrato
- Gestione delle dipendenze semplificata
- Integrazione con GitHub

### Frontend

La configurazione del frontend verrà aggiunta in seguito.

## Deployment

Per il deployment, consulta la documentazione nella directory `deploy/`. 