<?php

namespace App\Controller;

use App\Entity\User;
use JMS\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserController extends AbstractController
{
    /**
     * @Route("/user/register", name="user_register", methods={"POST"})
     */
    public function register(Request $request, SerializerInterface $serializer, UserPasswordEncoderInterface $pwdEncoder)
    {
        //Je créer un nouvel objet User
        $user = new User();
        
        //Je récupère les données de la requête
        $data = $request->getContent();
        //Je déserialize les données reçues et les stock dans $user
        $user = $serializer->deserialize($data, 'App\Entity\User', 'json');
        
        //J'encode les pwd reçu
        $encodedPassword = $pwdEncoder->encodePassword($user, $user->getPassword());
        $user->setPassword($encodedPassword);
        // dd($user);
        //J'enregistre les données en BDD
        $em = $this->getDoctrine()->getManager();
        $em->persist($user);
        $em->flush();

        return new Response('', Response::HTTP_CREATED);    
    }
}
